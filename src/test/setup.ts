import { afterEach, beforeAll } from "vitest";
import { worker } from "./worker";

beforeAll(() => worker.start({ onUnhandledFrame: "error", quiet: true }));
afterEach(() => worker.resetHandlers());
