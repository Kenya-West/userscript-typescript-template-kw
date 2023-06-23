/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ConsoleLogAction } from "../actions/console-log.action";
import { ButtonControlParams, ButtonIcons } from "../controls/buttons/button.model";
import { ButtonControl } from "../controls/buttons/button/button.control";
import { ElementCollection } from "../element-find/element-collection";
import { GetElementCollection } from "../element-find/element-find.service";
import { Routes } from "../routing/routes";
import { ComponentCollectionEntryModel, ComponentCollectionModel } from "./component-collection.model";

export const ComponentCollection: ComponentCollectionModel = {
  exampleButton: {
    class: ButtonControl,
    componentParams: {
      id: "sample-button",
      tag: "button",
      classes: ["example-button"],
      attributes: { tabindex: "0", role: "link" },
      icon: ButtonIcons.none,
      text: "EXAMPLE BUTTON"
    } satisfies ButtonControlParams,
    callback: ConsoleLogAction.prototype.run,
    args: {},
    guards: {
      routes: [Routes.root],
      elementShouldExist: [GetElementCollection.get(ElementCollection.Root)!],
      unique: true
    },
    defaultRenderAt: {
      place: GetElementCollection.get(ElementCollection.Root)!
    }
  } satisfies ComponentCollectionEntryModel<typeof ButtonControl, ButtonControlParams>
};
