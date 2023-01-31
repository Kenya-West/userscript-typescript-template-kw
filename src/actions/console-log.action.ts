import { Logger } from "../utils/logger";
import { ActionAbstract } from "./action-abstract.action";

export class ConsoleLogAction implements ActionAbstract {
    public run(): void {
        Logger.log("The button is working!");
    }
}