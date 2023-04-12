import { Logger } from "../utils/logger";

export const elementShouldNotExistGuard = (selector: string) => (target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any) {
    if (selector) {
      const url = new URL(location.href)
    
      if (document.querySelector(selector) === null) {
        Logger.log("🟢 Checking element should not have been existing... Element not existed... Function shall proceed to execute");
        originalMethod.apply(this, args);
      } else {
        Logger.log("🟠 Checking element should not have been existing... Element existed... Function shall not execute");
        return;
      }
    };
    return;  
  };

  return descriptor;
};

export const elementShouldExistGuard = (selector?: string) => (target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any) {
    if (selector) {
      if (document.querySelector(selector) !== null) {
        Logger.log("🟢 Checking element should have been existing... Element exists... Function shall proceed to execute");
        originalMethod.apply(this, args);
      } else {
        Logger.log("🟠 Checking element should have been existing... Element does not exist... Function shall not execute");
        return;
      }
    }
    return;
  };

  return descriptor;
};