import { ConsoleLogAction } from "../actions/console-log.action";
import { ElementCollection } from "../element-find/element-collection";
import { GetElementCollection } from "../element-find/element-find.service";
import { Routes } from "../routing/routes";
import { ButtonControlParams, ButtonIcons } from "./buttons/button.model";
import { ButtonControl } from "./buttons/button/button.control";
import { ControlCollectionEntryModel, ControlCollectionModel } from "./control-collection.model";

export const ControlCollection: ControlCollectionModel = {
  exampleButton: {
    class: ButtonControl,
    controlParams: {
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
  } satisfies ControlCollectionEntryModel<typeof ButtonControl, ButtonControlParams>
};
