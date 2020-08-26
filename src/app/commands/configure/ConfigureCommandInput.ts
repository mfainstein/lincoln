import {ReaderAttributes} from "../../../domain/reader/ReaderAttributes";
import {CommandInput} from "../CommandInput";

export interface ConfigureCommandInput extends CommandInput {
    readerAttributes:ReaderAttributes;
}

const a = {"reader": {"firstName": "asdasd", "lastName": "asdasd", "email": "aaa@aaa.com"}}