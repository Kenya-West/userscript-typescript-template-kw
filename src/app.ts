import { routeGuardIncludes } from "./guards/route.guard";
import { elementShouldNotExistGuard, elementShouldExistGuard } from "./guards/element-existence.guard";
import { Routes } from "./routing/routes";
import { GetElementCollection } from "./element-find/element-find";
import { ElementCollection } from "./element-find/element-collection";
import { addButtons, loadStyles } from "./app.facade";
import { Logger } from "./utils/logger";

export class App {
    constructor() {
        Logger.log("Script is initialized!");
        this.initializeFeatures();
    }

    @routeGuardIncludes(Routes.root)
    @elementShouldNotExistGuard("#example-id")
    @elementShouldExistGuard(GetElementCollection.get(ElementCollection.Root)?.selector)
    public addButtons(): void {
        Logger.log("addButtons method is working!");
        addButtons();
    }

    public initializeFeatures(): void {
        loadStyles();
    }
}
