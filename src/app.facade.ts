/* eslint-disable unused-imports/no-unused-vars */
import { container, singleton } from "tsyringe";

import { ControlCollectionEntryModel } from "./controls/control-collection.model";
import { ControlComposeService } from "./controls/control-compose.service";
import { modalControlEntry } from "./controls/modals/modal/modal-entries";
import { CustomMethodsService } from "./custom/custom-methods.service";
import { ElementFindService } from "./element-find/element-find.service";
import { RenderService } from "./render/render.service";
import { StylesInjecterService } from "./styles/styles-injecter.service";

@singleton()
export class AppFacade {
  public enabledFeatures: Record<string, boolean> = {};

  constructor() {
    this.enableElementServices();
    this.enableRenderService();
    this.initCustomService();
  }

  /**
   * Includes SCSS styles in bundle
   */
  public enableStyles(): void {
    const instance = container.resolve<StylesInjecterService>(StylesInjecterService);
    instance.injectInit();
    this.enabledFeatures.styles = true; // TODO: move to decorator
  }
  /**
   * Adds modal to DOM
   */
  public enableModal(): void {
    const instance = container.resolve<ControlComposeService>(ControlComposeService);
    instance.composeAndRender(modalControlEntry as unknown as ControlCollectionEntryModel);
    this.enabledFeatures.styles = true; // TODO: move to decorator
  }

  private enableElementServices(): void {
    const instance = container.resolve<ElementFindService>(ElementFindService);
    this.enabledFeatures.element = true;
  }
  private enableRenderService(): void {
    const instance = container.resolve<RenderService>(RenderService);
    this.enabledFeatures.render = true;
  }
  private initCustomService(): void {
    const instance = container.resolve<CustomMethodsService>(CustomMethodsService);
  }
}
