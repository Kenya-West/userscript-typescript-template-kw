import { ElementCollectionModel } from "../element-find/element-collection.model";
import { Routes } from "../routing/routes";
import { ControlParams } from "./control.model";
import { ControlBase } from "./control-base.control";

export interface ControlCollectionModel {
  [key: string]: ControlCollectionEntryModel<any, unknown | never>;
}

export interface ControlCollectionEntryModel<T = ControlBase, S = ControlParams> {
  class: T;
  controlParams: S;
  callback: Function;
  args: unknown;
  guards?: GuardsPayloadModel;
  defaultRenderAt: RenderPlaceModel;
}

export interface RenderPlaceModel {
  place: ElementCollectionModel | string;
  insertBefore?: ElementCollectionModel | string;
}

export interface GuardsPayloadModel {
  routes?: Routes[];
  elementShouldExist?: ElementCollectionModel[];
  elementShouldNotExist?: ElementCollectionModel[];
  unique?: boolean;
}
