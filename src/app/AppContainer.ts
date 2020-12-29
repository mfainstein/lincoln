import {Container} from "inversify";
import {AppTypes} from "./AppTypes";

import "reflect-metadata";
import {AppService} from "./services/AppService";
import {ServicesRegistry} from "./registries/ServicesRegistry";
import {ServicesRegistryImpl} from "./registries/ServicesRegistryImpl";
import {ReadersService} from "./services/readers/ReadersService";

const appContainer = new Container();
appContainer.bind<AppService>(AppTypes.AppService).to(ReadersService).inSingletonScope();


//other
appContainer.bind<ServicesRegistry>(AppTypes.ServicesRegistry).to(ServicesRegistryImpl).inSingletonScope();

export {appContainer};