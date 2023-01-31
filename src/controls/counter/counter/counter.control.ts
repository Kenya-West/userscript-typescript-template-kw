import { ControlParams } from "../../control.model";
import { CounterBaseControl } from "../counter-base/counter-base.control";

export class CounterControl extends CounterBaseControl {
    constructor(params: ControlParams) {
        super(params);
    }
}