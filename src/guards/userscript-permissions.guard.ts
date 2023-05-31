import { Logger } from "../utils/logger";

export const checkUserscriptPermission =
  (permissionName: string) => (target: object, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value as () => void;

    descriptor.value = function(...args: []): void {
      // check any function exitence in global scope by string
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (typeof (window as any)[permissionName] === "function") {
        originalMethod.apply(this, args);
      } else {
        Logger.error(`${permissionName} is not defined`);
        return;
      }
    };

    return descriptor;
  };

// rewrite checkUserscriptPermission function without decorator payload and without comments. It returns boolean
export const checkUserscriptPermissionFunction = (permissionName: string): boolean => {
  let result = false;
  if (typeof (window as any)[permissionName] === "function") {
    result = true;
  }
  return result;
};
