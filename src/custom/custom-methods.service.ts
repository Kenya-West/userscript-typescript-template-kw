import { container, singleton } from "tsyringe";
import { ControlComposeService } from "../controls/control-compose.service";
import { ControlCollection } from "../controls/control-collection";
import { OnInit } from "../hooks/on-init.hook";
import { HookType } from "../hooks/hook-type";

@singleton()
export class CustomMethodsService implements OnInit {
    /**
     * TODO: Make possible to set many HookTypes or set it only inside OnInit 
     */
    public hookType = HookType.OnInit;

    public ustOnInit(): void {
        this.init();
    }
    public init() {
        const controlService = container.resolve<ControlComposeService>(ControlComposeService);
        // TODO: Remove `any`
        controlService.composeAndRender(ControlCollection.exampleButton as any);
    }
}