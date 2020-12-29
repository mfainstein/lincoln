import {ServicesRegistry} from "./ServicesRegistry";
import {injectable, multiInject} from "inversify";
import {AppTypes} from "../AppTypes";
import {AppService} from "../services/AppService";

@injectable()
export class ServicesRegistryImpl implements ServicesRegistry {
    private serviceById: Map<string, AppService>;

    constructor(@multiInject(AppTypes.AppService) protected services: AppService[]) {
        this.serviceById = new Map();
        for (let service of services) {
            this.register(service);
        }
    }

    get(serviceId: string): AppService | undefined {
        return this.serviceById.get(serviceId);
    }

    register(service: AppService): void {
        this.serviceById.set(service.getServiceName(), service);
    }

}