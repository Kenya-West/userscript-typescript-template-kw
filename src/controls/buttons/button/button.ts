import { ButtonParams } from "../button.model";
import { BaseButton } from "./base-button";

export class Button extends BaseButton {
    constructor(params: ButtonParams, callback: Function, args: unknown) {
        super(params, callback, args);
    }

    public setInnerHTML(): void {
        this.element.innerHTML = `<i class="typograph-icon"></i>`;
    }
}
