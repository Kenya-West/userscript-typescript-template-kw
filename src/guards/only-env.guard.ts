import { Environment, ScriptsEnvsModel } from "../environment/environment.model";

export const EnvGuard = (envs: Environment[]) => (target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: unknown[]) {
      const url = new URL(location.href)
      if (envs.includes((process.env.scriptEnvs as unknown as ScriptsEnvsModel).ENV)) {
        originalMethod.apply(this, args);
      } else {
        return;
      }
    };
  
    return descriptor;
  };

export const EnvGuardFunction = (envs: Environment[]): boolean => {
  let result = false;

  const url = new URL(location.href)
  if (envs.includes((process.env.scriptEnvs as unknown as ScriptsEnvsModel).ENV)) {
    result = true;
  }
  return result;
}

