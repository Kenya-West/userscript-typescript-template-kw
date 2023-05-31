import { singleton } from "tsyringe";

import style from "../assets/styles/styles.scss";
import { checkUserscriptPermission } from "../guards/userscript-permissions.guard";

@singleton()
export class StylesInjecterService {
  /**
   * @deprecated Tampermonkey does not support this method since 2018
   * @param css: a css string
   */
  @checkUserscriptPermission("GM_addStyle")
  public static inject(css: string): void {
    GM_addStyle(css);
  }
  // this is the style element that will be injected into the DOM at script"s start
  public injectInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    style;
  }
}
