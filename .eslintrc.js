/**
 * -----------------------------------------------------
 * DISCLAIMER ON FILE TYPE USED HERE
 * -----------------------------------------------------
 *
 * We are only using the .JS version of an ESLint config file here so that we can
 * add lots of comments to better explain and document the setup.
 *
 * Using JSON in your own projects would be preferable because it can be statically
 * analyzed and therefore we can provide automated migrations as linting best practices
 * evolve over time.
 *
 * WE THEREFORE STRONGLY RECOMMEND CONVERTING THIS TO `.eslintrc.json` once you have
 * read through and understood the comments.
 */
module.exports = {
    /**
     * -----------------------------------------------------
     * NOTES ON CONFIGURATION STRUCTURE
     * -----------------------------------------------------
     *
     * Out of the box, ESLint does not support TypeScript or HTML.
     *
     * Fortunately, ESLint gives us an "overrides" configuration option which allows us to set
     * different lint tooling (parser, plugins, rules etc) for different file types, which is
     * critical because our .ts files require a different parser and different rules to our
     * .html (and our inline Component) templates.
     */
    overrides: [
        /**
         * -----------------------------------------------------
         * TYPESCRIPT FILES (COMPONENTS, SERVICES ETC) (.ts)
         * -----------------------------------------------------
         */
        {
            files: ["*.ts"],
            /**
             * See packages/eslint-plugin/src/configs/README.md
             * for what this recommended config contains.
             */
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "prettier",
                "plugin:prettier/recommended"
            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module",
                createDefaultProgram: true,
                warnOnUnsupportedTypeScriptVersion: true
            },
            plugins: [
                "@typescript-eslint",
                "@typescript-eslint/tslint",
                "import",
                "jsdoc",
                "prefer-arrow",
                "prettier",
                "simple-import-sort",
                "unused-imports"
            ],
            rules: {
                "simple-import-sort/imports": [
                    "error",
                    {
                        groups: [
                            // Side effect imports.
                            ["^\\u0000"],
                            // Packages.
                            ["^@?(?!mediu@nrwl/eslint-plugin-nxm-stories)\\w"],
                            ["^@medium-stories?\\w"],
                            ["^[^.]"],
                            // Relative imports.
                            // Anything that starts with a dot.
                            ["^\\."]
                        ]
                    }
                ],
                "sort-imports": "off",
                "import/first": "error",
                "import/newline-after-import": "error",
                "import/no-duplicates": "error",
                "prettier/prettier": [
                    "warn",
                    {
                        endOfLine: "auto"
                    }
                ],
                "no-shadow": "off",
                "@typescript-eslint/no-shadow": "error",
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/array-type": "off",
                "@typescript-eslint/ban-types": [
                    "warn",
                    {
                        types: {
                            Object: {
                                message: "Avoid using the `Object` type. Did you mean `object`?"
                            },
                            Function: {
                                message: "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                            },
                            Boolean: {
                                message: "Avoid using the `Boolean` type. Did you mean `boolean`?"
                            },
                            Number: {
                                message: "Avoid using the `Number` type. Did you mean `number`?"
                            },
                            String: {
                                message: "Avoid using the `String` type. Did you mean `string`?"
                            },
                            Symbol: {
                                message: "Avoid using the `Symbol` type. Did you mean `symbol`?"
                            }
                        }
                    }
                ],
                "@typescript-eslint/consistent-type-assertions": "error",
                "@typescript-eslint/dot-notation": "error",
                "@typescript-eslint/indent": "off",
                "@typescript-eslint/member-delimiter-style": [
                    "error",
                    {
                        multiline: {
                            delimiter: "semi",
                            requireLast: true
                        },
                        singleline: {
                            delimiter: "semi",
                            requireLast: false
                        }
                    }
                ],
                "@typescript-eslint/member-ordering": "error",
                "@typescript-eslint/naming-convention": "off",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-empty-interface": "error",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-inferrable-types": [
                    "error",
                    {
                        ignoreParameters: true
                    }
                ],
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-namespace": "error",
                "@typescript-eslint/no-non-null-assertion": "error",
                "@typescript-eslint/no-parameter-properties": "off",
                "@typescript-eslint/no-unsafe-assignment": "warn",
                "@typescript-eslint/no-unsafe-member-access": "warn",
                "@typescript-eslint/no-unused-expressions": "error",
                "@typescript-eslint/no-useless-constructor": ["error"],
                "@typescript-eslint/no-use-before-define": "off",
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/prefer-for-of": "error",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/restrict-template-expressions": "warn",
                "@typescript-eslint/quotes": ["error", "double", { avoidEscape: false, allowTemplateLiterals: true }],
                "@typescript-eslint/semi": ["error", "always"],
                "@typescript-eslint/triple-slash-reference": [
                    "error",
                    {
                        path: "always",
                        types: "prefer-import",
                        lib: "always"
                    }
                ],
                "@typescript-eslint/type-annotation-spacing": "error",
                "@typescript-eslint/unified-signatures": "error",
                "@typescript-eslint/unbound-method": "off",
                "arrow-body-style": "error",
                complexity: "off",
                "constructor-super": "error",
                curly: "error",
                "eol-last": "error",
                eqeqeq: ["error", "smart"],
                "guard-for-in": "error",
                "id-blacklist": ["error", "any", "Number", "String", "string", "Boolean", "boolean", "Undefined", "undefined"],
                "id-match": "error",
                "import/no-deprecated": "warn",
                "jsdoc/check-alignment": "error",
                "jsdoc/check-indentation": "error",
                "jsdoc/newline-after-description": "error",
                "jsdoc/no-types": "error",
                "max-classes-per-file": "off",
                "max-len": [
                    "error",
                    {
                        code: 140
                    }
                ],
                "new-parens": "error",
                "no-bitwise": "error",
                "no-caller": "error",
                "no-cond-assign": "error",
                "no-console": [
                    "error",
                    {
                        allow: [
                            "log",
                            "warn",
                            "dir",
                            "timeLog",
                            "assert",
                            "clear",
                            "count",
                            "countReset",
                            "group",
                            "groupEnd",
                            "table",
                            "dirxml",
                            "error",
                            "groupCollapsed",
                            "Console",
                            "profile",
                            "profileEnd",
                            "timeStamp",
                            "context"
                        ]
                    }
                ],
                "no-debugger": "error",
                "no-empty": "off",
                "no-eval": "error",
                "no-fallthrough": "error",
                "no-invalid-this": "off",
                "no-new-wrappers": "error",
                "no-restricted-imports": ["error", "rxjs/Rx"],
                "no-throw-literal": "error",
                "no-trailing-spaces": "error",
                "no-undef-init": "error",
                "no-underscore-dangle": "off",
                "no-unsafe-finally": "error",
                "no-unused-labels": "error",
                "no-unused-vars": "off",
                "no-useless-constructor": "off",
                "no-var": "error",
                "object-shorthand": "error",
                "one-var": ["error", "never"],
                "prefer-arrow/prefer-arrow-functions": "off",
                "prefer-const": "error",
                "quote-props": ["error", "as-needed"],
                radix: "off",
                "space-before-function-paren": [
                    "error",
                    {
                        anonymous: "never",
                        asyncArrow: "always",
                        named: "never"
                    }
                ],
                "spaced-comment": [
                    "error",
                    "always",
                    {
                        markers: ["/"]
                    }
                ],
                "unused-imports/no-unused-imports": "error",
                "unused-imports/no-unused-vars": [
                    "warn",
                    { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
                ],
                "use-isnan": "error",
                "valid-typeof": "off",
                "@typescript-eslint/tslint/config": [
                    "error",
                    {
                        rules: {
                            "import-spacing": true,
                            typedef: [true, "call-signature"],
                            whitespace: [
                                true,
                                "check-branch",
                                "check-decl",
                                "check-operator",
                                "check-separator",
                                "check-type",
                                "check-typecast"
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
