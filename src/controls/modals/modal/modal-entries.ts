import { ControlCollectionEntryModel } from "../../control-collection.model";
import { ModalControlParams } from "../modal.model";
import { ModalBaseControl } from "../modal-base/modal-base.control";
import { ModalControl } from "./modal.control";
import html from "./modal.control.html";
import scss from "./modal.control.scss";

export const modalControlEntry: ControlCollectionEntryModel<ModalBaseControl, ModalControlParams> = {
    class: ModalControl as unknown as ModalBaseControl,
    controlParams: {
        tag: "div",
        id: "modal",
        html: html as string,
        scss: scss as string,
    },
    callback: () => { },
    args: {},
    guards: {
        routes: [],
        elementShouldExist: [],
        unique: true
    },
    defaultRenderAt: {
        place: "body"
    }
};
