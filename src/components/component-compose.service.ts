import { container, singleton } from "tsyringe";

import { ElementFindService } from "../element-find/element-find.service";
import { RenderParamsModel, RenderResult, SourceElementModel } from "../render/render.model";
import { RenderService } from "../render/render.service";
import { ComponentBase } from "./component-base.component";
import { ComponentCollectionUnitModel, GuardsPayloadModel, RenderPlaceModel } from "./component-collection.model";

@singleton()
export class ComponentComposeService {

  public composeAndRender(componentModel: ComponentCollectionUnitModel, renderAt?: RenderPlaceModel): SourceElementModel | RenderResult {
    const component = this.compose(componentModel);
    return this.render(component, renderAt ?? componentModel.defaultRenderAt, componentModel.guards);
  }
  public compose(componentModel: ComponentCollectionUnitModel): ComponentBase {
    const classType = componentModel.class;
    container.register("MyClass", { useClass: componentModel.class, singleton: componentModel.guards?.unique ?? false });
    const component = container.resolve<ComponentBase>(classType);

    // const component = new componentModel.class(componentModel.componentParams);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return component;
  }
  public render(component: ComponentBase, renderAt: RenderPlaceModel, guards?: GuardsPayloadModel): SourceElementModel | RenderResult {
    const renderService = container.resolve<RenderService>(RenderService);
    const elementFindService = container.resolve<ElementFindService>(ElementFindService);
    const renderPayload: RenderParamsModel = {
      element: component.element ?? (component as any).component, // TODO: fix this
      place: getRenderElement(renderAt.place),
      guards
    };

    if (renderAt.insertBefore) {
      renderPayload.renderBefore = getRenderElement(renderAt.insertBefore);
    }

    return renderService.render(renderPayload);

    function getRenderElement(place: typeof renderAt.place): HTMLElement {
      return typeof place === "string"
        ? elementFindService.getElementByQuerySingle(place)
        : elementFindService.getElementByElementCollectionSingle(place.id);
    }
  }
}
