import { ButtonParams } from "../button.model";

export abstract class AbstractButton {
    abstract element: HTMLElement | HTMLButtonElement | HTMLDivElement;

    constructor(params: ButtonParams, callback: Function, args: unknown) {
    }

    abstract createElement(element: string): HTMLElement | HTMLButtonElement | HTMLDivElement;
    abstract setInnerHTML(): void;
    abstract setId(id: string): void;
    abstract setClasses?(classes: string[]): void;
    abstract setAttributes?(attributes: Record<string, string>[]): void;
    abstract setStyles?(styles: { selector?: string; key: string; value: string }[]): void;
    abstract addEventListener(button: HTMLElement | HTMLButtonElement | HTMLDivElement, callback: Function, args: unknown): void;
}