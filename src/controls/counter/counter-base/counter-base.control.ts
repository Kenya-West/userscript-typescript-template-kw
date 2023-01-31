import { ControlBase } from "../../control-base.control";
import { ControlParams } from "../../control.model";
import { CounterAbstractControl } from "../counter-abstract/counter-abstract.control";

export abstract class CounterBaseControl extends ControlBase implements CounterAbstractControl {
    protected constructor(params: ControlParams) {
        super(params);
    }
}