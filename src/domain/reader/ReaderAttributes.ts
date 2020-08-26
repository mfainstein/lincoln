import {ReadingMedium} from "../reading/ReadingMedium";
import {ReadingSpeed} from "../reading/ReadingSpeed";

export interface ReaderAttributes {
    /**
     * @TJS-type string
     * @minLength 2
     */
    firstName: string;

    /**
     * @TJS-type string
     * @minLength 2
     */
    lastName: string;

    /**
     * On the analogy to multi-tasking - aka reading more than one book at a time.
     *
     */
    multiReading?: boolean;

    speed?: ReadingSpeed;

    interests?: string[];

    preferredMedium?: ReadingMedium;
}