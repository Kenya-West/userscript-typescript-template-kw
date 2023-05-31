/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ControlBase } from "../../control-base.control";
import { ButtonControlParams } from "../button.model";
import { ButtonAbstractControl } from "../button-abstract/button-abstract.control";

export abstract class ButtonBaseControl extends ControlBase implements ButtonAbstractControl {
  constructor(params: ButtonControlParams, callback: () => void, args: unknown) {
    super(params);
    this.addEventListener(this.element, callback, args);
  }

  public addEventListener(button: HTMLElement | HTMLButtonElement | HTMLDivElement, callback: () => void, args: unknown): void {
    button.addEventListener("click", callback.bind(this, args), false);
  }
}
