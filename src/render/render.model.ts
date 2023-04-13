import { GuardsPayloadModel } from "../controls/control-collection.model";

export interface RenderDataModel {
    beforeElem: HTMLElement;
    afterElem?: HTMLElement;
    querySelector?: string;
    class: string[];
    id?: string;
    styles: {key: string; value: string | number}[];
}

export interface RenderParamsModel {
    element: SourceElementModel;
    place: SourceElementModel;
    renderBefore?: SourceElementModel;
    guards?: GuardsPayloadModel;
}

export type RemoveParamsModel = SourceElementModel;

export type SourceElementModel = HTMLElement;

export enum RenderResult {
    SUCCESS,
    FAIL,
    NOELEMENT
}

export enum DeleteResult {
    SUCCESS,
    FAIL,
    NOELEMENT
}