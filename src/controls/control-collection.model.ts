import { ElementCollection } from "../element-find/element-collection";
import { ElementCollectionModel } from "../element-find/element-collection.model";
import { ControlBase } from "./control-base.control";
import { ControlParams } from "./control.model";

export interface ControlCollectionModel {
    [key: string]: ControlCollectionEntryModel<any, unknown | never>;
}

export interface ControlCollectionEntryModel<T = ControlBase, S = ControlParams> {
    class: T;
    controlParams: S;
    callback: Function;
    args: unknown;
    defaultRenderAt: RenderPlaceModel;
}

export interface RenderPlaceModel {
    place: ElementCollectionModel | string;
    insertBefore?: ElementCollectionModel | string;
}