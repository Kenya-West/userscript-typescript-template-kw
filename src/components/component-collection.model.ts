import { ElementCollectionModel } from "../element-find/element-collection.model";
import { Routes } from "../routing/routes";
import { ComponentParams } from "./component.model";
import { ComponentBase } from "./component-base.component";

export interface ComponentCollectionModel {
  [key: string]: ComponentCollectionEntryModel<any, unknown | never>;
}

export interface ComponentCollectionEntryModel<T = ComponentBase, S = ComponentParams> {
  class: T;
  componentParams: S;
  callback: () => void;
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
