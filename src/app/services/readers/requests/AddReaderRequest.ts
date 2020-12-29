import {LincolnRequest} from "../../../LincolnRequest";

export interface AddReaderRequest extends LincolnRequest {
    firstName:string;
    lastName:string;
    email:string;
    token:string;
}