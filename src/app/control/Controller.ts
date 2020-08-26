import {CommandOutput} from "../commands/CommandOutput";

/**
 * Invoker of commands.
 *
 */
export interface Controller {

    /**
     * Executes a command.
     * @param commandName the command name to invoke
     * @param data the input (any json object): will be validated as part of the flow
     * @return a promised CommandOutput
     * @see CommandOutput
     */
    executeCommand(commandName: string, data?: any): Promise<CommandOutput>;

    /**
     * undo the most recent command, if possible
     * @return promised true if succeeded
     */
    undo(): Promise<boolean>

    /**
     * redo the most recent command if possible
     * @return promised CommandOutput
     *
     */
    redo(): Promise<CommandOutput>;
}