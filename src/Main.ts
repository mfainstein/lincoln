#!/usr/bin/env node
/*import commander from 'commander';
const program = commander.program;
program.name("lincoln");
const newCommand = new commander.Command();
newCommand.name("add").arguments("--book-name <name>").action((args:any[])=>{console.log("test " +args[0])});
program.addCommand(newCommand);
program.parse(process.argv);*/

import "reflect-metadata";
import {Container} from "inversify";
import { domainContainer } from "./domain/DomainContainer";
import { appContainer } from "./app/AppContainer";
import {CommandLineParser} from "./ports/cli/CommandLineParser";
import {PortCliTypes} from "./ports/cli/PortCliTypes";
import {portsContainer} from "./ports/PortsContainer";
import {infraContainer} from "./infra/InfraContainer";
import {AppTypes} from "./app/AppTypes";
import {ServicesRegistry} from "./app/registries/ServicesRegistry";

let container = Container.merge(domainContainer, appContainer);
container = Container.merge(container, infraContainer);
container = Container.merge(container, portsContainer);

let services = container.get<ServicesRegistry>(AppTypes.ServicesRegistry);

//client
let commandLineParser = container.get<CommandLineParser>(PortCliTypes.CommandLineParser);
commandLineParser.parse();
