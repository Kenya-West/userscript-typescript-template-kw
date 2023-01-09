import { Routes } from "../routing/routes";

export const routeGuard = (route: Routes) => (target: Object,
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