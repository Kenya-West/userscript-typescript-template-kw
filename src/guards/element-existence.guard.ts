import { Logger } from "../utils/logger";

export const elementShouldNotExistGuard = (selector: string) => (target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any) {
    if (selector) {
      const url = new URL(location.href)
    
      if (document.querySelector(selector) === null) {
        Logger.log("Проверка отсутствия элемента... Элемента нет... ОК");
        originalMethod.apply(this, args);
      } else {
        Logger.log("Проверка отсутствия элемента... Элемент есть... Плохо");
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
        Logger.log("Проверка наличия элемента... Элемент есть... ОК");
        originalMethod.apply(this, args);
      } else {
        Logger.log("Проверка наличия элемента... Элемента нет. Плохо");
        return;
      }
    }
    return;
  };

  return descriptor;
};