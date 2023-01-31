import { ConsoleLogAction } from "./actions/console-log.action";
import { ButtonControl } from "./controls/buttons/button/button.control";
import { ButtonIcons } from "./controls/buttons/button.model";
import { ElementFind, GetElementCollection } from "./element-find/element-find";
import { RenderAt } from "./render/render.fabric";
import { ElementCollection } from "./element-find/element-collection";

export function AddButtons() {
    // create button
    const addButtonAddAll = new ButtonControl({
            id: "sd-add-all",
            tag: "button",
            classes: ["btn", "btn-default"],
            icon: ButtonIcons.glyphiconPicture,
            text: "Lorem ipsum"
        },
        ConsoleLogAction.prototype.log,
        {}).element;

    // find place for button
    const element = new ElementFind().getElementByElementIdSingle(ElementCollection.Root);
    // render button
    new RenderAt().render(addButtonAddAll, element);
}