import {AppService} from "../services/AppService";

export interface ServicesRegistry {
    get(serviceId: string): AppService | undefined;

    register(service: AppService): void;
}