import { ConsoleLogAction } from "./actions/console-log.action";
import { ButtonControl } from "./controls/buttons/button/button.control";
import { ButtonIcons } from "./controls/buttons/button.model";
import { ElementFindService, GetElementCollection } from "./element-find/element-find.service";
import { RenderService } from "./render/render.service";
import { ElementCollection } from "./element-find/element-collection";
import { StylesInjecterService } from "./styles/styles-injecter.service";
import { container, singleton } from "tsyringe";
import { HooksRegistry } from "./hooks/hooks-registry.service";
import { HookType } from "./hooks/hook-type";
import { OnInit } from "./hooks/on-init.hook";
import { CustomMethodsService } from "./custom/custom-methods.service";

@singleton()
export class AppFacade {
    public enabledFeatures: Record<string, boolean> = {};

    constructor() {
        this.enableElementServices();
        this.enableRenderService();
        this.initCustomService();
    }

    private enableElementServices(): void {
        const instance = container.resolve<ElementFindService>(ElementFindService);
        this.enabledFeatures.element = true;
    }
    private enableRenderService(): void {
        const instance = container.resolve<RenderService>(RenderService);
        this.enabledFeatures.render = true;
    }
    private initCustomService() {
        const instance = container.resolve<CustomMethodsService>(CustomMethodsService);
        
        HooksRegistry.getInstancesByHookType(HookType.OnInit).forEach((instance) => {
            (instance.instance as OnInit).ustOnInit();
          });
    }

    /**
     * Includes SCSS styles in bundle
     */
    public enableStyles() {
        const instance = container.resolve<StylesInjecterService>(StylesInjecterService);
        instance.injectInit();
        this.enabledFeatures.styles = true; // TODO: move to decorator
    }
}