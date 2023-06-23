import { ComponentParams } from "./component.model";
import { ComponentAbstract } from "./component-abstract.component";

export class ComponentBase implements ComponentAbstract {
  public element: HTMLElement;

  constructor(params: ComponentParams | unknown) {
    // narrow the type
    const paramsDefault = params as ComponentParams;

    this.element = this.createElement(paramsDefault.tag ?? "button");
    if (paramsDefault.classes) {
      this.setClasses(paramsDefault.classes);
    }
    if (paramsDefault.text && !paramsDefault.html) {
      this.setInnerText(paramsDefault.text);
    }
    if (paramsDefault.html && !paramsDefault.text) {
      this.setInnerHtml(paramsDefault.html);
    }
    if (paramsDefault.attributes) {
      this.setAttributes(paramsDefault.attributes);
    }
    if (paramsDefault.styles) {
      this.setStyles(paramsDefault.styles);
    }
    if (paramsDefault.id) {
      this.setId(paramsDefault.id);
    }
  }

  public createElement<T>(element: string): T {
    return document.createElement(element) as unknown as T;
  }
  public setInnerText(text: string = "Ошибка: текст не был назначен"): void {
    // set innerHTML in button
    this.element.innerText = text;
  }
  public setInnerHtml(html: string = "Ошибка: HTML-разметка не была назначена"): void {
    // set innerHTML in button
    this.element.innerHTML = html;
  }
  public setId(id: string): void {
    if (id) {
      this.element.id = id;
    }
  }
  public setClasses(classes: string[]): void {
    classes.forEach((element) => {
      this.element.classList.add(element);
    });
  }

  public setAttributes(attributes: Record<string, string>): void {
    Object.entries(attributes).forEach(([key, value]) => {
      this.element.setAttribute(key, value);
    });
  }
  public setStyles(styles: { selector?: string; key: string; value: string }[]): void {
    styles?.forEach((style) => {
      if (style.selector) {
        (this.element.querySelector(style.selector) as HTMLDivElement | HTMLButtonElement).style.setProperty(style.key, style.value);
      } else {
        this.element.style.setProperty(style.key, style.value);
      }
    });
  }
}
