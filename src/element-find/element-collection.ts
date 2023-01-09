import { ElementCollectionModel } from "./element-find";


export enum ElementCollection {
    Root
}

export const elementCollectionList: ElementCollectionModel[] =
[
    {
        id: ElementCollection.Root,
        selector: "body",
        preferredMode: "selectSingle"
    }
]