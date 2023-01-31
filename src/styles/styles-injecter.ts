import style from "../assets/styles/styles.scss";
import { checkUserscriptPermission } from "../guards/userscript-permissions.guard";

export class StylesInjecter {
    // this is the style element that will be injected into the DOM at script"s start
    public injectInit() {
        style;
    }

    /**
     * @deprecated Tampermonkey does not support this method since 2018
     * @param css: a css string
     */
    @checkUserscriptPermission("GM_addStyle")
    public static inject(css: string) {
        GM_addStyle(css);
    }
}