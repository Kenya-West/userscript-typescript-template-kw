import * as dotenv from "dotenv";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import { BannerPlugin, Configuration, DefinePlugin } from "webpack";

import * as packageJson from "./package.json";
import { generateHeader, GeneratePathToUserscriptPlugin } from "./plugins/userscript.plugin";
import { Environment } from "./src/environment/environment.model";

const env = process.env.ENV as Environment || "development";
const envContents = dotenv.config({ path: `.env.${env}`, override: true });
let envContentsString: string;

try {
    envContentsString = JSON.stringify(envContents.parsed);
} catch (error) {
    throw new Error(`Error while loading .env.${env} file: ${error}, contents: ${envContents.parsed}`);
}

const configCommon: Configuration = {
    mode: "none",
    output: {
        path: path.resolve(__dirname, "userscript"),
        filename: "[filename].js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    externals: {
        ...Object.fromEntries(Object.keys(packageJson.dependencies).map(key => [key, key]))
        // "reflect-metadata": "reflect-metadata",
        // "tsyringe": "tsyringe",
    },
    plugins: [
        new BannerPlugin({
            banner: generateHeader,
            raw: true,
        }),
        new DefinePlugin({
            "process.env.scriptEnvs": envContentsString
        })
    ]
};

const configUserscript: Configuration = {
    ...configCommon,
    entry: {
        bundle: { import: "./src/index.ts", filename: "index.user.js" }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    esModule: true,
                },
            },
        ],
    },
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin({
            // minify: TerserPlugin.swcMinify,
            terserOptions: {
                format: {
                    comments: false,
                },
                compress: false,
                mangle: false,
            },
            extractComments: false,
        })],
    }
};

const configDev: Configuration = {
    ...configCommon,

    entry: {
        devBundle: { import: "./src/.empty", filename: "index.hot-reload.user.js" }
    },
    plugins: configCommon.plugins?.concat([
        new GeneratePathToUserscriptPlugin()
    ]),
};

export default [configUserscript, configDev];
