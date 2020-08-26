import {CommandOutput} from "./CommandOutput";
import {CommandInput} from "./CommandInput";

/**
 * An executable command.
 */
export interface Command {

    /**
     * gets the name of the command
     * @return string name of command for execution
     */
    getExecutionName(): string;

    /**
     * gets the command description.
     * this is for internal use, but clients can use it as well
     * @return description of the command.
     */
    getDescription():string;

    /**
     * executes the command
     *
     * @return promised CommandOutput
     * @see CommandOutput
     * @see CommandOutputBase
     */
    execute(): Promise<CommandOutput>;

    /**
     * undo this command
     * @return promised true if succeeded
     */
    undo(): Promise<boolean>;

    /**
     * gets a generated input validator.
     * the input validator is generated automatically from the specific CommandInput interface for this Command.
     * @return validation function
     */
    getInputValidator<T extends CommandInput>(): (value: any) => T;

    /**
     * set input for this command
     *
     * @param input the input for the command
     *
     */
    setInput(input: CommandInput): void;

    /**
     * gets the input that was set for this command
     * @return CommandInput the input set
     */
    getInput():CommandInput;


}

