import { routeGuardIncludes } from "./guards/route.guard";
import { elementShouldNotExistGuard, elementShouldExistGuard } from "./guards/element-existence.guard";
import { Routes } from "./routing/routes";
import { GetElementCollection } from "./element-find/element-find";
import { ElementCollection } from "./element-find/element-collection";
import { AddButtons } from "./app.facade";

export class App {
    constructor() {
        console.log("Скрипт инициализирован!");
    }

    @routeGuardIncludes(Routes.root)
    @elementShouldNotExistGuard("#sd-add-all-public")
    @elementShouldExistGuard(GetElementCollection.get(ElementCollection.Root)?.selector)
    public addButtons(): void {
        console.log("addButtons запущен!");
        AddButtons();
    }
}
