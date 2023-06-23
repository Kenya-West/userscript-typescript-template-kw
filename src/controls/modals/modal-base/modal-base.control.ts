/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Logger } from "../../../utils/logger";
import { ControlBase } from "../../control-base.control";
import { ModalControlParams } from "../modal.model";
import { ModalAbstractControl } from "../modal-abstract/modal-abstract.control";

export abstract class ModalBaseControl extends ControlBase implements ModalAbstractControl {
  private params: ModalControlParams;

  constructor(params: ModalControlParams, callback: () => void, args: unknown) {
    super(params);
    this.params = params;
    // void this.getHtml().then((html) => {
    //   this.setHtml(html);
    // });
    if (params.html) {
    }
    if (params.styles) {
      // this.setHtml(params.html);
    }
    this.addEventListener(this.element, callback, args);
  }

  public addEventListener(modal: HTMLElement | HTMLDivElement, callback: () => void, args: unknown): void {
    modal.addEventListener("click", callback.bind(this, args), false);
  }

  public setHtml(html: string): void {
    try {
      this.element.innerHTML = html;
      this.onSetHtml();
    } catch (error: any) {
      Logger.error(error);
    }
  }

  protected onSetHtml(): void {}

  private async getHtml(): Promise<string> {
    Logger.log("# Getting node:" + this.params.html);
    try {
        return (await import(/* webpackIgnore: true */`${this.params.html}`) as {default: string}).default;
    } catch (error) {
        console.log("[error] fail to build DOM node with error", error);
    }
    return Promise.reject("[error] fail to build DOM node with error. Error: No template found");
}
}
