import { ControlParams } from "../../control.model";
import { ControlAbstract } from "../../control-abstract.control";

export abstract class PanelAbstractControl extends ControlAbstract {
  constructor(params: ControlParams, callback: () => void, args: unknown) {
    super();
  }
}
