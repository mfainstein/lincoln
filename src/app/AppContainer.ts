import {Container} from "inversify";
import {AppTypes} from "./AppTypes";
import {Command} from "./commands/Command";
import {ConfigureCommand} from "./commands/configure/ConfigureCommand";
import {Controller} from "./control/Controller";
import {CommandsRegistry} from "./registries/CommandsRegistry";
import {CommandsRegistryImpl} from "./registries/CommandsRegistryImpl";
import {AppController} from "./control/AppController";
import {ShelveCommand} from "./commands/shelve/ShelveCommand";
import "reflect-metadata";

const appContainer = new Container();

//commands
appContainer.bind<Command>(AppTypes.Command).to(ShelveCommand);
appContainer.bind<Command>(AppTypes.Command).to(ConfigureCommand);


//other
appContainer.bind<Controller>(AppTypes.Controller).to(AppController).inSingletonScope();
appContainer.bind<CommandsRegistry>(AppTypes.CommandsRegistry).to(CommandsRegistryImpl).inSingletonScope();

export {appContainer};