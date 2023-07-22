export abstract class ComponentAbstract {
    abstract element: HTMLElement | HTMLButtonElement | HTMLDivElement;

    abstract createElement<T>(element: string): T;
    abstract setInnerHtml(html: string): void;
}
