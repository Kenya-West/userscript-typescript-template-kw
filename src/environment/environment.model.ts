export type Environment = "development" | "none" | "production" | undefined;

export const SCRIPTENVS_PROPNAME = "scriptEnvs";

/**
 * Pre-defined strings of .env files
 */
export interface ScriptsEnvsModel {
    ENV: Environment;
}