import {Command} from "./Command";
import {CommandOutput} from "./CommandOutput";
import {CommandInput} from "./CommandInput";
import {TextUtils} from "../../infra/utils/TextUtils";
import {CommandOutputBase} from "./CommandOutputBase";
import {injectable} from "inversify";
import "reflect-metadata";
@injectable()
export abstract class CommandBase implements Command {

    private static COMMAND_NAME_PREFIX = "Command";

    private duringExecution: boolean;
    private executed: boolean;
    private executionName: string;

    private input: CommandInput;

    constructor(){
        this.resolveExecutionName();
    }

    private resolveExecutionName(): void {
        let className: string = this.constructor.name;
        let commandNameBase = className.replace(CommandBase.COMMAND_NAME_PREFIX, "");
        this.executionName = TextUtils.camelCaseToLowerCaseDashSeparated(commandNameBase)
            .toLowerCase();
    }

    public getExecutionName(): string {
        return this.executionName;
    }

    async execute(): Promise<CommandOutput> {
        return new Promise<CommandOutput>(async (resolve, reject) => {
            let commandOutput: CommandOutput = new CommandOutputBase();
            let startTime = Date.now();
            try {
                this.duringExecution = true;
                commandOutput = await this.doExecute(this.input);
                this.duringExecution = false;
                let endTime = Date.now();
                this.executed = true;
                commandOutput.executionTimeMs = endTime - startTime;
                commandOutput.success = true;
                resolve(commandOutput);
            } catch (e) {
                let endTime = Date.now();
                commandOutput.executionTimeMs = endTime - startTime;
                commandOutput.errors.push(e.toString());
                reject(commandOutput)
            }

        })

    }

    abstract getDescription(): string;

    abstract async doExecute(input: CommandInput): Promise<CommandOutput>;

    abstract undo(): Promise<boolean>;

    abstract getInputValidator<T extends CommandInput>(): (value: any) => T;

    setInput(input: CommandInput): void {
        this.input = input;
    }

    getInput() {
        return this.input;
    }


}