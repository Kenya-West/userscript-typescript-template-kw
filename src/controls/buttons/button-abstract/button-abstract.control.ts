import { ControlAbstract } from "../../control-abstract.control";
import { ButtonControlParams } from "../button.model";

type ButtonElementType = HTMLElement | HTMLButtonElement | HTMLDivElement;

export abstract class ButtonAbstractControl extends ControlAbstract {
    abstract element: ButtonElementType;

    constructor(params: ButtonControlParams, callback: Function, args: unknown) {
        super();
    }

    abstract addEventListener(button: ButtonElementType, callback: Function, args: unknown): void;
}