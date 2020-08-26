import {Container} from "inversify";
import {CommandLineParser} from "./cli/CommandLineParser";
import {PortCliTypes} from "./cli/PortCliTypes";
import {MinimalCommandLineParser} from "./cli/MinimalCommandLineParser";

import {AppTypes} from "../app/AppTypes";
import {PermissiveAuthorizationService} from "../infra/services/authentication/PermissiveAuthorizationService";
import {AuthenticationSsoService} from "../app/services/AuthenticationSsoService";

const portsContainer = new Container();
portsContainer.bind<CommandLineParser>(PortCliTypes.CommandLineParser).to(MinimalCommandLineParser);
portsContainer.bind<AuthenticationSsoService>(AppTypes.AuthenticationSsoService).to(PermissiveAuthorizationService);

export {portsContainer};