import { ComponentParams } from "./component.model";
import { ComponentAbstract } from "./component-abstract.component";

export class ComponentBase implements ComponentAbstract {
  public element: HTMLElement;

  constructor(params: ComponentParams) {
    // narrow the type
    const paramsDefault = params;

    this.element = this.createElement("div");
    this.setInnerHtml(paramsDefault.html);
  }

  public createElement<T>(element: string): T {
    return document.createElement(element) as unknown as T;
  }
  public setInnerHtml(html: string = "Ошибка: HTML-разметка не была назначена"): void {
    // set innerHTML in button
    this.element.innerHTML = html;
  }
}
