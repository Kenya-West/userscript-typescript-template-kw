export interface ButtonParams {
    icon: ButtonIcons;
    text: string;
    classes: string[];
    attributes?: Record<string, string>[];
    styles?: {
        selector?: string;
        key: string;
        value: string;
    }[];
    id?: string
}

export enum ButtonIcons {
    none = "none",
    glyphiconPicture = "glyphicon-picture"
}