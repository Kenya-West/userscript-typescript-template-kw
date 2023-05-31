import { ControlAbstract } from "../../control-abstract.control";
import { ButtonControlParams } from "../button.model";

type ButtonElementType = HTMLElement | HTMLButtonElement | HTMLDivElement;

export abstract class ButtonAbstractControl extends ControlAbstract {
  abstract element: ButtonElementType;

  constructor(params: ButtonControlParams, callback: () => void, args: unknown) {
    super();
  }

  abstract addEventListener(button: ButtonElementType, callback: () => void, args: unknown): void;
}
