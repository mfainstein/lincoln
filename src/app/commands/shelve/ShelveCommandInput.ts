import {Edition} from "../../../domain/books/Edition";


export interface ShelveCommandInput {
    editions: Edition[];
}