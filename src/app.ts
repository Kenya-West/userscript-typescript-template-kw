import { routeGuardIncludes } from "./guards/route.guard";
import { elementShouldNotExistGuard, elementShouldExistGuard } from "./guards/element-existence.guard";
import { Routes } from "./routing/routes";
import { GetElementCollection } from "./element-find/element-find.service";
import { ElementCollection } from "./element-find/element-collection";
import { AppFacade } from "./app.facade";
import { Logger } from "./utils/logger";
import { container } from "tsyringe";

export class App {
    private facadeInstance: AppFacade;
    
    constructor() {
        Logger.log("Script is initialized!");
        this.facadeInstance = container.resolve<AppFacade>(AppFacade);
        this.initializeFeatures();
    }

    public initializeFeatures(): void {
        this.facadeInstance.enableStyles();
    }
}
