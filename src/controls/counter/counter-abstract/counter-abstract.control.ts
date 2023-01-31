import { ControlAbstract } from "../../control-abstract.control";
import { ControlParams } from "../../control.model";

export abstract class CounterAbstractControl extends ControlAbstract {
    constructor(params: ControlParams) {
        super();
    }
}