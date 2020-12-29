import {AppService} from "./AppService";
import {subscribeOn} from "rxjs/operators";
import Rxmq, {Channel} from "rxmq";
import {injectable} from "inversify";
import {Responder} from "cote";
import {LincolnRequest} from "../LincolnRequest";
import {LincolnRespond} from "../LincolnRespond";

@injectable()
export abstract class AppServiceBase implements AppService {
    private responders: Responder[];

    constructor() {
        this.responders = [];
        this.initialize();
    }

    abstract doHandle(request: LincolnRequest): LincolnRespond;

    abstract respondsTo(): string[];

    getServiceName(): string {
        return this.constructor.name;
    }

    abstract getRequestValidator(requestType: string): (value:unknown) => LincolnRequest;

    initialize(): void {
        console.log("Initializing responder" + this.respondsTo().join(";"));
        const responder: Responder = new Responder(
            {name: this.getServiceName(), respondsTo: this.respondsTo()}
            );
        for (let requestType of this.respondsTo()) {
            responder.on<LincolnRequest>(
                requestType,
                (request: LincolnRequest) => {
                    return this.handle(request);
                }
            );
        }
        this.responders.push(responder);

    }

    async handle(request: LincolnRequest): Promise<LincolnRespond> {
        return new Promise<LincolnRespond>(async (resolve, reject) => {
            let respond:LincolnRespond = {
                type:request.type,
                success: false,
                executionTimeMs:0,
                errors: []
            };
            let startTime = Date.now();
            try {
                //validate input here
                let validator: (value:unknown)=> LincolnRequest = this.getRequestValidator(request.type);
                validator(request);
                let serviceRespond:LincolnRespond = this.doHandle(request);
                let endTime = Date.now();
                serviceRespond.executionTimeMs = endTime - startTime;
                serviceRespond.success = true;
                resolve(serviceRespond);
            } catch (e) {
                let endTime = Date.now();
                respond.success = false;
                respond.executionTimeMs = endTime - startTime;
                respond.errors = [e.toString()];
                reject(respond)
            }

        })
    }

}