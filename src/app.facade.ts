import { ConsoleLogAction } from "./actions/console-log.action";
import { Button } from "./controls/buttons/button/button";
import { ButtonIcons } from "./controls/buttons/button.model";
import { ElementFind, GetElementCollection } from "./element-find/element-find";
import { RenderAt } from "./render/render.fabric";
import { ElementCollection } from "./element-find/element-collection";

export function AddButtons() {
    // create button
    const addButtonAddAll = new Button({
            id: "sd-add-all",
            classes: ["btn", "btn-default"],
            icon: ButtonIcons.glyphiconPicture,
            text: "Lorem ipsum"
        },
        ConsoleLogAction.prototype.log,
        {}).element;

    // find place for button
    const elementData = GetElementCollection.get(ElementCollection.Root);
    if (elementData) {
        const element = new ElementFind().getSingle(elementData);
        // render button
        new RenderAt().render(addButtonAddAll, element);
    }
}