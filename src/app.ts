import { container } from "tsyringe";

import { AppFacade } from "./app.facade";
import { Logger } from "./utils/logger";

export class App {
  private facadeInstance: AppFacade;

  constructor() {
    Logger.log("🔵 Script is initialized!");
    this.facadeInstance = container.resolve<AppFacade>(AppFacade);
    this.initializeFeatures();
  }

  public initializeFeatures(): void {
    this.facadeInstance.enableStyles();
    this.facadeInstance.enableModal();
  }
}
