import { ElementCollection } from "./element-collection";


export interface ElementCollectionModel {
    id: ElementCollection;
    selector: string;
    preferredMode: "selectSingle" | "selectMultiple";
}
