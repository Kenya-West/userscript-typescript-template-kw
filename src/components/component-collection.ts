/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ButtonControl } from "../controls/buttons/button/button.control";
import { ElementCollection } from "../element-find/element-collection";
import { GetElementCollection } from "../element-find/element-find.service";
import { Routes } from "../routing/routes";
import { ComponentParams } from "./component.model";
import { ComponentBase } from "./component-base.component";
import { ComponentCollectionListModel, ComponentCollectionUnitModel } from "./component-collection.model";

export const ComponentCollection: ComponentCollectionListModel = {
  exampleButton: {
    class: ButtonControl as unknown as ComponentBase,
    componentParams: {
      html: "",
      styles: [""],
    },
    guards: {
      routes: [Routes.root],
      elementShouldExist: [GetElementCollection.get(ElementCollection.Root)!],
      unique: true
    },
    defaultRenderAt: {
      place: GetElementCollection.get(ElementCollection.Root)!
    }
  } satisfies ComponentCollectionUnitModel<ComponentBase, ComponentParams>
};
