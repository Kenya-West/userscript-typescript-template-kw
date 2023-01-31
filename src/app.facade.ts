import { ConsoleLogAction } from "./actions/console-log.action";
import { ButtonControl } from "./controls/buttons/button/button.control";
import { ButtonIcons } from "./controls/buttons/button.model";
import { ElementFind, GetElementCollection } from "./element-find/element-find";
import { RenderAt } from "./render/render.fabric";
import { ElementCollection } from "./element-find/element-collection";
import { StylesInjecter } from "./styles/styles-injecter";

export function addButtons() {
    addThreeDotsButton();

    function addThreeDotsButton() {
        const addSearchButton = new ButtonControl({
            id: "sample-button",
            tag: "button",
            classes: ["example-button"],
            attributes: { "tabindex": "0", "role": "link" },
            icon: ButtonIcons.none,
            text: "EXAMPLE BUTTON",
        },
        ConsoleLogAction.prototype.run,
        {}).element;

        const element = new ElementFind().getElementByElementIdSingle(ElementCollection.Root);
        // render button
        new RenderAt().render(addSearchButton, element);
    }
}

export function loadStyles() {
    new StylesInjecter().injectInit();
}