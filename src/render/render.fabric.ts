import { Logger } from "../utils/logger";
import { DeleteResult, RenderDataModel, RenderResult, SourceElementModel } from "./render.model";

export class RenderAt {
    /**
     * render
     */
    public render(element: SourceElementModel, place: SourceElementModel, renderBefore?: SourceElementModel): SourceElementModel | RenderResult {
        if (place && element) {
            if (renderBefore) {
                place.insertBefore(element, renderBefore);
            } else {
                place.appendChild(element);
            }
            Logger.log(`Зарендерил "${element?.innerText || `элемент с тегом "${element?.tagName}"`}"!`);
            return element;
        } else {
            Logger.log("Хуёво, нихуя не зарендерил")
            return RenderResult.NOELEMENT;
        }
    }

    remove(elem: SourceElementModel): DeleteResult {
        if (elem) {
            elem.parentNode?.removeChild(elem);
            return DeleteResult.SUCCESS
        } else {
            return DeleteResult.NOELEMENT
        }
    }
}