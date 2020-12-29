import {LincolnRequest} from "../LincolnRequest";
import {LincolnRespond} from "../LincolnRespond";


export interface AppService {
    getServiceName(): string;

    respondsTo():string[];

    handle(request:LincolnRequest):Promise<LincolnRespond>;
}