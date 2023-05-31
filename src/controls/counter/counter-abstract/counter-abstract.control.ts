import { ControlParams } from "../../control.model";
import { ControlAbstract } from "../../control-abstract.control";

export abstract class CounterAbstractControl extends ControlAbstract {
  constructor(params: ControlParams) {
    super();
  }
}
