import { singleton } from "tsyringe";
import { Logger } from "../utils/logger";
import { DeleteResult, RenderDataModel, RenderResult, SourceElementModel, RemoveParamsModel, RenderParamsModel } from "./render.model";

@singleton()
export class RenderService {
    /**
     * render
     */
    public render(params: RenderParamsModel): SourceElementModel | RenderResult {
        if (params.place && params.element) {
            if (params.renderBefore) {
                params.place.insertBefore(params.element, params.renderBefore);
            } else {
                params.place.appendChild(params.element);
            }
            Logger.log(`ℹ️ Rendered "${params.element?.innerText || `an element with tag "${params.element?.tagName}"`}"`);
            return params.element;
        } else {
            Logger.log("🔴 Nothing was rendered. The most likely reason: no element to render in", "warn")
            return RenderResult.NOELEMENT;
        }
    }

    remove(elem: RemoveParamsModel): DeleteResult {
        if (elem) {
            elem.parentNode?.removeChild(elem);
            return DeleteResult.SUCCESS
        } else {
            return DeleteResult.NOELEMENT
        }
    }
}