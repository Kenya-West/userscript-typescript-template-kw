import "reflect-metadata";

import { App } from "./app";
import { startScheduling } from "./scheduler/scheduler";

const app = new App();

startScheduling(app);
