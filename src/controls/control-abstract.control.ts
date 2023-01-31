export abstract class ControlAbstract {
    abstract element: HTMLElement | HTMLButtonElement | HTMLDivElement;

    abstract createElement<T>(element: string): T;
    abstract setInnerText?(text: string): void;
    abstract setInnerHtml?(html: string): void;
    abstract setId(id: string): void;
    abstract setClasses?(classes: string[]): void;
    abstract setAttributes?(attributes: Record<string, string>): void;
    abstract setStyles?(styles: { selector?: string; key: string; value: string }[]): void;
}