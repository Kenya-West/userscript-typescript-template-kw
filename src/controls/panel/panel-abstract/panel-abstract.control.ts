import { ControlAbstract } from "../../control-abstract.control";
import { ControlParams } from "../../control.model";

export abstract class PanelAbstractControl extends ControlAbstract {
    constructor(params: ControlParams, callback: Function, args: unknown) {
        super();
    }
}