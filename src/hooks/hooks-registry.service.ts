import { HookModel } from "./abstract.hook";
import { HookType } from "./hook-type";

export interface hookInstance {
    hookType: HookType;
    instance: HookModel;
}

export class HooksRegistry {
    private static instances: hookInstance[] = [];

    public static register(hookType: HookType, instance: HookModel): void {
        HooksRegistry.instances.push({hookType, instance});
    }

    public static getInstancesByHookType(filterBy: HookType): hookInstance[] {
        return HooksRegistry.instances.filter((instance) => instance.hookType === filterBy);
    }
    public static getAllInstances(): hookInstance[] {
        return HooksRegistry.instances;
    }
}