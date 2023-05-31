export interface ButtonControlParams {
  id: string;
  icon: ButtonIcons;
  tag: string;
  text?: string;
  html?: string;
  classes: string[];
  attributes?: Record<string, string>;
  styles?: {
    selector?: string;
    key: string;
    value: string;
  }[];
}

export enum ButtonIcons {
  none = "none",
  glyphiconPicture = "glyphicon-picture"
}
