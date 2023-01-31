export abstract class ActionAbstract {
    public abstract run(payload?: unknown): unknown | void;
}