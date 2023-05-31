import { EnvGuard } from "../guards/only-env.guard";

export class Logger {
  public static error(message: string | number | object): void {
    console.error(message);
  }
  @EnvGuard(["development", "production"])
  public static logProd(message: string | number | object, level: "log" | "info" | "warn" = "log"): void {
    Logger.log(message, level);
  }

  @EnvGuard(["development"])
  public static log(message: string | number | object, level: "log" | "info" | "warn" = "log"): void {
    switch (level) {
      case "log":
        console.log(message);
        break;
      case "info":
        // eslint-disable-next-line no-console
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
}
