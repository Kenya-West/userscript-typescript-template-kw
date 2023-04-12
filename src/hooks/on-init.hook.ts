import { HookModel } from "./abstract.hook";
import { HookType } from "./hook-type";
import { HooksRegistry } from "./hooks-registry.service";

export abstract class OnInit implements HookModel {
    public hookType: HookType = HookType.OnInit;

    /**
     * Called when the app is initialized
     */
    public ustOnInit(): void {};

    constructor() {
        HooksRegistry.register(this.hookType, this);
    }
}