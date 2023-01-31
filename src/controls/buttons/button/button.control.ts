import { ButtonControlParams } from "../button.model";
import { ButtonBaseControl } from "../button-base/button-base.control";

export class ButtonControl extends ButtonBaseControl {
    constructor(params: ButtonControlParams, callback: Function, args: unknown) {
        super(params, callback, args);
    }
}
