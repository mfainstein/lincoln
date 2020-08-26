import {Controller} from "./Controller";
import {inject, injectable, multiInject} from "inversify";
import {AppTypes} from "../AppTypes";
import {CommandsRegistry} from "../registries/CommandsRegistry";
import {Command} from "../commands/Command";
import {CommandOutput} from "../commands/CommandOutput";
import {CommandInput} from "../commands/CommandInput";
import {AuthenticationSsoService} from "../services/AuthenticationSsoService";
import {CommandOutputBase} from "../commands/CommandOutputBase";

@injectable()
export class AppController implements Controller {

    private history: Command[];

    constructor(
        @inject(AppTypes.CommandsRegistry) private commandsRegistry:CommandsRegistry,
        @inject(AppTypes.AuthenticationSsoService) private authenticationService:AuthenticationSsoService
    ) {}

    /**
     * Parse the input of the command, by the command's validator.
     * should this be part of the interface?
     *
     * @param command the command to parse input for
     * @param input the input, a JSON parsed object
     * @return the command input as CommandInput
     * @see CommandInput
     * @see Command.getInputValidator()
     */
    parseInput(command:Command, input: CommandInput): CommandInput {
        let validate: (value: any) => CommandInput = command.getInputValidator();
        let commandInput:CommandInput = validate(input);
        command.setInput(commandInput);
        return commandInput;
    }

    /**
     * The flow of execution is as follows:
     * 1. Authentication (through an authentication service).
     * 2. Input parsing (by the command's input validator).
     * 3. Command execution.
     *
     * @param commandName the command name to execute.
     * @see CommandBase.getExecutionName()
     * @param input the input to the command (JSON parsed).
     * @return promised command output/
     */
    async executeCommand(commandName: string, input: any /*object (json parsed)*/): Promise<CommandOutput> {
        let command:Command | undefined = this.commandsRegistry.get(commandName);
        if (typeof command == "undefined"){
            throw new Error("Could not find command of name "+commandName);
        }
        console.log("=== Executing "+command.getExecutionName()+" ===");
        let readerId:string;
        try{
            readerId = await this.authenticationService.authenticate(input.token);
            this.parseInput(command, input);
            input.readerId = readerId;
        }
        catch (e) {
            return new Promise<CommandOutput>((resolve, reject)=>{
                let commandOutput: CommandOutput = new CommandOutputBase();
                commandOutput.errors.push(e);
                reject(commandOutput);
            })
        }

        return command.execute();

    }

    undo(): Promise<boolean> {
        throw new Error("Not Implemented");
    }

    redo(): Promise<CommandOutput> {
        throw new Error("Not Implemented");
    }


}