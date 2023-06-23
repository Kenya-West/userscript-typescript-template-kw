import { ModalBaseControl } from "../modal-base/modal-base.control";

export class ModalControl extends ModalBaseControl {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    private modalWrapper = document.querySelector("#userscript-typescript-template-kw-modal")!;

    public switchModalstate(): void {
        const modalContainer = this.modalWrapper.querySelector(".modal-container");

        modalContainer?.classList.toggle("modal-open");
    }
    protected onSetHtml(): void {
        const button = this.modalWrapper.querySelector(".extension-settings-shortcut-button");
        if (button) {
            button.addEventListener("click", () => this.switchModalstate());
        }
    }
}
