import { ElementCollectionModel } from "./element-collection.model";

/**
 * This is where you define your element collections ids
 *
 * This is an enum with no string values
 *
 * And values inside enum should not have pre-defined indexes
 * since they are used internally in script without exposing enum to anything else
 */
export enum ElementCollection {
  Root,
}

/**
 * This is where you define your element collections themselves
 * @see {@link ElementCollectionModel}
 * 
 * - `id` is the unique key that should not be used more than one time
 * - `selector` is the query selector that will be used to find the element
 * - `preferredMode` is the preferred mode of finding the element
 */
export const elementCollectionList: ElementCollectionModel[] = [
  {
    id: ElementCollection.Root,
    selector: "body",
    preferredMode: "selectSingle",
  },
];
