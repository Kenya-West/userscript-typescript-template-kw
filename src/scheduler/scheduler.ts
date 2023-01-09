import { App } from "../app";

let interval: unknown = null;

// this is the timer which is invoking method of App to render buttons
export const startScheduling = (app: App) => {
    interval = setInterval(function() {
        app.addButtons();
    }, 5000);
}

export const stopScheduling = () => {
    clearInterval(interval as any);
}
