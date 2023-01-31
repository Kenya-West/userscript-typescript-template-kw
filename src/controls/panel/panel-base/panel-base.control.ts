import { ControlBase } from "../../control-base.control";
import { ControlParams } from "../../control.model";
import { PanelAbstractControl } from "../panel-abstract/panel-abstract.control";

export abstract class PanelBaseControl extends ControlBase implements PanelAbstractControl {
    constructor(params: ControlParams) {
        super(params);
    }
}