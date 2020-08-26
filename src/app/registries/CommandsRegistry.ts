import {Command} from "../commands/Command";

/**
 * Holds commands by name.
 *
 */
export interface CommandsRegistry {

    /**
     * Eegister a command.
     * Typically commands register with a certain convention name, which is a manipulation of their class name.
     *
     * @param command the command to register
     */
    register(command: Command): void;

    /**
     * Get the command for this command name, if exists.
     *
     * @param commandName
     */
    get(commandName: string): Command | undefined;


}
