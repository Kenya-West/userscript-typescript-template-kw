import { EnvGuard } from "../guards/only-env.guard";

export class Logger {
    @EnvGuard("development")
    public static log(message: string | number | Object, level: "log" | "info" | "warn" = "log") {
        switch (level) {
            case "log":
                console.log(message);
                break;
            case "info":
                console.info(message);
                break;
            case "warn":
                console.warn(message);  
                break;
            default:
                console.log(message);
                break;
        }
    }
    public static error(message: string | number | Object) {
        console.error(message);
    }

}