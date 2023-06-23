import { ControlAbstract } from "../../control-abstract.control";
import { ModalControlParams } from "../modal.model";

type ModalElementType = HTMLElement | HTMLDivElement;

export abstract class ModalAbstractControl extends ControlAbstract {
  abstract element: ModalElementType;

  constructor(params: ModalControlParams, callback: () => void, args: unknown) {
    super();
  }

  abstract addEventListener(modal: ModalElementType, callback: () => void, args: unknown): void;
}
