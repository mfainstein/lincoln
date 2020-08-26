import {Price} from "./Price";
import {Cover} from "./Cover";
import {Image} from "./Image";
import {Author} from "./Author";
import {Source} from "../sources/Source";
import {FormFactor} from "./FormFactor";

/**
 * Corresponds to what Google Books call a 'Volume'
 */
export interface Edition {
    id:string;
    marketPrices: Price[];
    isbn: string;
    cover: Cover;
    images: Image[];
    title: string;
    authors: Author;
    sources: Source[];
    formFactor: FormFactor;
    description: string;
    categories: string[];
    published: Date;
    publisher: string;
    pages: number;
    language: string;
    weight: string; //TODO: should be number with a unit

}

