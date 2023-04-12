import { container, singleton } from "tsyringe";
import { ControlComposeService } from "../controls/control-compose.service";
import { ControlCollection } from "../controls/control-collection";
import { Logger } from "../utils/logger";

@singleton()
export class CustomMethodsService {
    constructor() {
        this.init();
    }
    public init() {
        const controlService = container.resolve<ControlComposeService>(ControlComposeService);
        // TODO: Remove `any`
        Logger.log(`\n Composing control... \n`);
        controlService.composeAndRender(ControlCollection.exampleButton as any);
    }
}