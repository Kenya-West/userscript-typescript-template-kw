import { container, singleton } from "tsyringe";

import { ControlCollection } from "../controls/control-collection";
import { ControlComposeService } from "../controls/control-compose.service";

@singleton()
export class CustomMethodsService {
  protected interval?: NodeJS.Timer;

  constructor() {
    this.init();
  }
  public init() {
    this.startTimer(500);

    // Any logic to setup your custom script here
  }

  public startTimer(time: number) {
    this.interval = setInterval(() => {
      this.renderButton();
    }, time);
  }

  public stopTimer(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private renderButton() {
    const controlService = container.resolve<ControlComposeService>(ControlComposeService);
    // TODO: Remove `any`
    controlService.composeAndRender(ControlCollection.exampleButton as any);
  }
}
