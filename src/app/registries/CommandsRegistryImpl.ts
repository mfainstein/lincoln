import {injectable, multiInject} from "inversify";
import {CommandsRegistry} from "./CommandsRegistry";
import {Command} from "../commands/Command";
import {AppTypes} from "../AppTypes";
import {TextUtils} from "../../infra/utils/TextUtils";


@injectable()
export class CommandsRegistryImpl implements CommandsRegistry{
    private commandByName: Map<string, Command>;

    constructor(@multiInject(AppTypes.Command) protected commands: Command[]) {
        this.commandByName = new Map();
        for (let command of commands) {
            this.register(command);
        }
    }

    get(commandName: string): Command | undefined {
        return this.commandByName.get(commandName);
    }

    register(command:Command): void {
        let commandName:string = command.getExecutionName();
        this.commandByName.set(commandName, command);
    }
}
