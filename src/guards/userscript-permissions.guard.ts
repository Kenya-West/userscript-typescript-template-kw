export const checkUserscriptPermission = (permissionName: string) => (target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any) {
        // check any function exitence in global scope by string
        if (typeof (window as any)[permissionName] === "function") {
            originalMethod.apply(this, args);
        } else {
            console.error(`${permissionName} is not defined`);
            return;  
        }
    };
  
    return descriptor;
  };