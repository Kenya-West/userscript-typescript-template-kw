import { container, singleton } from "tsyringe";

import { ElementFindService } from "../element-find/element-find.service";
import { RenderParamsModel, RenderResult, SourceElementModel } from "../render/render.model";
import { RenderService } from "../render/render.service";
import { ControlBase } from "./control-base.control";
import { ControlCollectionEntryModel, GuardsPayloadModel, RenderPlaceModel } from "./control-collection.model";

@singleton()
export class ControlComposeService {

  public composeAndRender(controlModel: ControlCollectionEntryModel, renderAt?: RenderPlaceModel): SourceElementModel | RenderResult {
    const control = this.compose(controlModel);
    return this.render(control, renderAt ?? controlModel.defaultRenderAt, controlModel.guards);
  }
  public compose(controlModel: ControlCollectionEntryModel): ControlBase {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const control = new (controlModel as any).class(controlModel.controlParams, controlModel.callback, controlModel.args);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return control;
  }
  public render(control: ControlBase, renderAt: RenderPlaceModel, guards?: GuardsPayloadModel): SourceElementModel | RenderResult {
    const renderService = container.resolve<RenderService>(RenderService);
    const elementFindService = container.resolve<ElementFindService>(ElementFindService);
    const renderPayload: RenderParamsModel = {
      element: control.element,
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
