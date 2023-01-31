import { ControlBase } from "../../control-base.control";
import { ButtonAbstractControl } from "../button-abstract/button-abstract.control";
import { ButtonControlParams } from "../button.model";

export abstract class ButtonBaseControl extends ControlBase implements ButtonAbstractControl {
    constructor(params: ButtonControlParams, callback: Function, args: unknown) {
        super(params);
        this.addEventListener(this.element, callback, args);
    }

    public addEventListener(button: HTMLElement | HTMLButtonElement | HTMLDivElement, callback: Function, args: unknown): void {
        button.addEventListener("click", callback.bind(this, args), false);
    };
}