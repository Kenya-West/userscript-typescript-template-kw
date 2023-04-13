import { Routes } from "../routing/routes";
import { Logger } from "../utils/logger";

export const routeGuardExact = (route: Routes) => (target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    const url = new URL(location.href)
    if (url.pathname+url.hash === route || url.href === route) {
      originalMethod.apply(this, args);
    } else {
      return;
    }
  };

  return descriptor;
};

export const routeGuardIncludes = (route: Routes) => (target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    const url = new URL(location.href)
    if (url.toString().includes(route)) {
      originalMethod.apply(this, args);
    } else {
      return;
    }
  };

  return descriptor;
};

export const routeGuardExactFunction = (route: Routes): boolean => {
  let result = false;
  const url = new URL(location.href)
  if (url.pathname+url.hash === route || url.href === route) {
    result = true;
  }
  return result;
}

export const routeGuardIncludesFunction = (route: Routes): boolean => { 
  let result = false;
  const url = new URL(location.href)
    if (url.toString().includes(route)) {
      result = true;
    } else {
      Logger.log(`🟠 Provided routes do not match with current path ${url.toString()}`, "warn");
    }
  return result;
};