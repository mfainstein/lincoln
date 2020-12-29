import {ReaderAttributes} from "../../../../domain/reader/ReaderAttributes";
import {LincolnRequest} from "../../../LincolnRequest";

export interface ConfigureReaderRequest extends LincolnRequest {
    token: string;
    reader: ReaderAttributes;
}