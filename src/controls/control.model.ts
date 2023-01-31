export interface ControlParams {
    tag: string;
    id: string,
    text?: string;
    html?: string;
    classes?: string[];
    attributes?: Record<string, string>;
    styles?: {
        selector?: string;
        key: string;
        value: string;
    }[];
}