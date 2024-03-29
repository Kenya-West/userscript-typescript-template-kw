/* eslint-disable max-len */
import { Logger } from "../utils/logger";

export const elementShouldNotExistGuard = (selector: string) => (target: object, propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value as () => void;

  descriptor.value = function(...args: []): void {
    if (selector) {
      const url = new URL(location.href);

      if (document.querySelector(selector) === null) {
        Logger.log(
          `🟢 Checking element with selector "${selector}" should not have been existing... Element not existed... Function shall proceed to execute`
        );
        originalMethod.apply(this, args);
      } else {
        Logger.log(
          `🟠 Checking element with selector "${selector}" should not have been existing... Element existed... Function shall not execute`
        );
        return;
      }
    }
    return;
  };

  return descriptor;
};

export const elementShouldExistGuard = (selector?: string) => (target: object, propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value as () => void;

  descriptor.value = function(...args: []): void {
    if (selector) {
      if (document.querySelector(selector) !== null) {
        Logger.log(
          `🟢 Checking element with selector "${selector}" should have been existing... Element exists... Function shall proceed to execute`
        );
        originalMethod.apply(this, args);
      } else {
        Logger.log(
          `🟠 Checking element with selector "${selector}" should have been existing... Element does not exist... Function shall not execute`
        );
        return;
      }
    }
    return;
  };

  return descriptor;
};

export const elementShouldNotExistGuardFunction = (selector: string): boolean => {
  let result = false;

  if (selector) {
    if (document.querySelector(selector) === null) {
      result = true;
      Logger.log(
        `🟢 Checking element with selector "${selector}" should not have been existing... Element not existed... Function shall proceed to execute`
      );
    } else {
      Logger.log(
        `🟠 Checking element with selector "${selector}" should not have been existing... Element existed... Function shall not execute`
      );
    }
  }
  return result;
};

export const elementShouldExistGuardFunction = (selector?: string): boolean => {
  let result = false;

  if (selector) {
    if (document.querySelector(selector) !== null) {
      result = true;
      Logger.log(
        `🟢 Checking element with selector "${selector}" should have been existing... Element exists... Function shall proceed to execute`
      );
    } else {
      Logger.log(
        `🟠 Checking element with selector "${selector}" should have been existing... Element does not exist... Function shall not execute`
      );
    }
  }
  return result;
};
