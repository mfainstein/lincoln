import {injectable} from "inversify";
import {AppService} from "../AppService";
import {AppServiceBase} from "../AppServiceBase";
import {LincolnRespond} from "../../LincolnRespond";
import {AddReaderRequest} from "./requests/AddReaderRequest";
import {LincolnRequest} from "../../LincolnRequest";
import ConfigureReaderRequestValidator from "./requests/ConfigureReaderRequestValidator";

@injectable()
export class ReadersService extends AppServiceBase {


    respondsTo(): string[] {
        return Object.values(Requests);
    }



    doHandle(request:LincolnRequest): LincolnRespond {
        switch (request.type) {
            case Requests.CONFIGURE : {
                for (let i=0; i<1000000; i++){
                    let a = 1;
                }
                return {
                    type: Requests.CONFIGURE,
                }
            }

            case Requests.ADD: {
                return {
                    type: Requests.CONFIGURE,
                };

            }
            default:
                return {
                    type: Requests.CONFIGURE,
                }
        }
    }

    getRequestValidator(requestType: string): (value:unknown) => LincolnRequest {
        switch (requestType) {
            case Requests.CONFIGURE: {
                return ConfigureReaderRequestValidator;
            }
            default:
                return ConfigureReaderRequestValidator;
        }
    }

    addReader(request: LincolnRequest): LincolnRespond {
        throw new Error("Not Implemented");
    }

    configure(request: LincolnRequest): LincolnRespond {
        throw new Error("Not Implemented");
    }
}

enum Requests {
    CONFIGURE = "configure-reader",
    ADD = "add-reader"
}