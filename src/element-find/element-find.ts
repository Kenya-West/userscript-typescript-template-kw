import { SourceElementModel } from "../render/render.model";
import { ElementCollection, elementCollectionList } from "./element-collection";

export class ElementFind {

    public contextElement: SourceElementModel;

    constructor(contextElement: SourceElementModel = document as unknown as SourceElementModel) {
        this.contextElement = contextElement;
    }

    public getSingle(query: ElementCollectionModel): SourceElementModel {
        return this.getElementSingle(query);
    }
    public getMultiple(query: ElementCollectionModel): SourceElementModel[] {
        return this.getElementMultiple(query);
    }

    private getElementSingle(query: ElementCollectionModel): SourceElementModel {
        // your implementation for specific cases
        if (query.id !== ElementCollection.Root) {
            const elem = this.contextElement.querySelector(".viewport__content-section .modal-body .panel-group")?.parentNode?.parentNode?.querySelector(".control-label") as HTMLElement;
            if (elem) {
                return elem;
            }
        }

        return this.contextElement.querySelector(query.selector) as SourceElementModel;
    }
    private getElementMultiple(query: ElementCollectionModel): SourceElementModel[] {
        return Array.from(this.contextElement.querySelectorAll(query.selector));
    }
}

export interface ElementCollectionModel {
    id: ElementCollection;
    selector: string;
    preferredMode: "selectSingle" | "selectMultiple";
}

export class GetElementCollection {
    public static get(id: ElementCollection): ElementCollectionModel | undefined {
        return elementCollectionList.find((element) => element.id === id);
    }
}