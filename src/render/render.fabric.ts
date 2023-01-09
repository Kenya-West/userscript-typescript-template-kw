import { DeleteResult, RenderDataModel, RenderResult, SourceElementModel } from "./render.model";

export class RenderAt {
    /**
     * render
     */
    public render(element: SourceElementModel, place: SourceElementModel): SourceElementModel | RenderResult {
        if (place && element) {
            place.appendChild(element);
            console.log(`Зарендерил "${element?.innerText ?? 'элемент'}"!`);
            return element;
        } else {
            console.log("Хуёво, нихуя не зарендерил")
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