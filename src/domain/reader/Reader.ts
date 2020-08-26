import {ReadingMedium} from "../reading/ReadingMedium";
import {ReadingSpeed} from "../reading/ReadingSpeed";
import {ReaderAttributes} from "./ReaderAttributes";

export interface Reader {
    /**
     * @TJS-type string
     * @minLength 32
     * @maxLength 32
     */
    readerId: string;

    attributes: ReaderAttributes;
}