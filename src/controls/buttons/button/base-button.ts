import { AbstractButton } from "../abstract-button/abstract-button";
import { ButtonParams } from "../button.model";

export abstract class BaseButton implements AbstractButton {
    public element: HTMLElement;

    constructor(params: ButtonParams, callback: Function, args: unknown) {
        this.element = this.createElement("button");
        this.setInnerHTML();
        this.setClasses(params.classes);
        if (params.attributes) this.setAttributes(params.attributes);
        if (params.styles) this.setStyles(params.styles);
        if (params.id) this.setId(params.id);
        this.addEventListener(this.element, callback, args);
    }

    public createElement(element: string): HTMLElement {
        return document.createElement(element);
    };
    public setInnerHTML(): void {
        // set innerHTML in button
        this.element.innerHTML = `<i class="typograph-icon"></i>`;
    };
    public setId(id: string): void {
        if (id) {
            this.element.id = id
        }
    };
    public setClasses(classes: string[]): void {
        classes.forEach(element => {
            this.element.classList.add(element)
        });
    };

    public setAttributes(attributes: Record<string, string>[]): void {
        attributes?.forEach((value) => {
            this.element.setAttribute(value[0], value[1]);
        });
    };
    public setStyles(styles: { selector?: string; key: string; value: string }[]): void {
        styles?.forEach((style) => {
            if (style.selector) {
                (this.element.querySelector(style.selector) as HTMLDivElement | HTMLButtonElement).style.setProperty(style.key, style.value);
            } else {
                this.element.style.setProperty(style.key, style.value);
            }
        });
    }
    public addEventListener(button: HTMLElement | HTMLButtonElement | HTMLDivElement, callback: Function, args: unknown): void {
        button.addEventListener("click", callback.bind(this, args), false);
    };
}