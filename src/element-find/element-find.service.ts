import { singleton } from "tsyringe";
import { SourceElementModel } from "../render/render.model";
import { ElementCollection, elementCollectionList } from "./element-collection";
import { ElementCollectionModel } from "./element-collection.model";

@singleton()
export class ElementFindService {

    public contextElement: Document;

    constructor() {
        this.contextElement = document;
    }

    /**
     * Finds an element by query selector
     * @param query Query selector
     * @returns Element 
     * @see {@link SourceElementModel}
     */
    public getElementByQuerySingle(query: string): SourceElementModel {
        return this._queryGet(query);
    }
    /**
     * Finds array of elements by query selector
     * @param query Query selector
     * @returns Array of elements
     * @see {@link SourceElementModel}
     */
    public getElementByQueryMultiple(query: string): SourceElementModel[] {
        return this._queryGetMultiple(query);
    }
    /**
     * Finds an element by `ElementCollection` @see {@link ElementCollection}
     * @param query `ElementCollection` 
     * @returns an element
     * @see {@link SourceElementModel}
     */
    public getElementByElementCollectionSingle(query: ElementCollection): SourceElementModel {
        return this._getByElementCollection(GetElementCollection.get(query)!);
    }
    /**
     * Finds array of elements by `ElementCollection` @see {@link ElementCollection}
     * @param query `ElementCollection` 
     * @returns array of elements
     * @see {@link SourceElementModel}
     */
    public getElementByElementCollectionMultiple(query: ElementCollection): SourceElementModel[] {
        return this._getElementMultiple(GetElementCollection.get(query)!);
    }

    private _queryGetMultiple(query: string): SourceElementModel[] {
        return Array.from(this.contextElement.querySelectorAll(query)) as SourceElementModel[];
    }
    private _queryGet(query: string): SourceElementModel {
        return this.contextElement.querySelector(query) as SourceElementModel;
    }
    private _getByElementCollection(query: ElementCollectionModel): SourceElementModel {
        // your hook for specific cases
        if (query.id !== ElementCollection.Root) {
            const elem = this.contextElement.querySelector(".viewport__content-section .modal-body .panel-group")?.parentNode?.parentNode?.querySelector(".control-label") as HTMLElement;
            if (elem) {
                return elem;
            }
        }

        // common implementation if no hooks are met
        return this.contextElement.querySelector(query.selector) as SourceElementModel;
    }
    private _getElementMultiple(query: ElementCollectionModel): SourceElementModel[] {
        return Array.from(this.contextElement.querySelectorAll(query.selector));
    }
}

export class GetElementCollection {
    public static get(id: ElementCollection): ElementCollectionModel | undefined {
        return elementCollectionList.find((element) => element.id === id);
    }
}