import { container, singleton } from "tsyringe";

import { ControlCollection } from "../controls/control-collection";
import { ControlComposeService } from "../controls/control-compose.service";

@singleton()
export class CustomMethodsService {
  protected interval?: NodeJS.Timer;

  constructor() {
    this.init();
  }
  public init(): void {
    this.startTimer(500);

    // Any logic to setup your custom script here
  }

  public startTimer(time: number): void {
    this.interval = setInterval(() => {
      this.renderButton();
    }, time);
  }

  public stopTimer(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private renderButton(): void {
    const controlService = container.resolve<ControlComposeService>(ControlComposeService);
    // TODO: Remove `any`
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    controlService.composeAndRender(ControlCollection.exampleButton as any);
  }
}
