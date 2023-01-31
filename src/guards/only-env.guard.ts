import { Environment, ScriptsEnvsModel } from "../environment/environment.model";

export const EnvGuard = (env: Environment) => (target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: unknown[]) {
      const url = new URL(location.href)
      if (env === (process.env.scriptEnvs as unknown as ScriptsEnvsModel).ENV) {
        originalMethod.apply(this, args);
      } else {
        return;
      }
    };
  
    return descriptor;
  };