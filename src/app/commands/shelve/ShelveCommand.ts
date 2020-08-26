import {injectable} from "inversify";
import {Command} from "../Command";
import {CommandOutput} from "../CommandOutput";
import {ShelveCommandInput} from "./ShelveCommandInput";
import {CommandBase} from "../CommandBase";
import {CommandInput} from "../CommandInput";

/**
 *
 *
 */
@injectable()
export class ShelveCommand extends CommandBase {
    async doExecute(input: CommandInput): Promise<CommandOutput> {
        throw new Error("Not implemented");
    }

    getInputValidator<T extends CommandInput>(): (value: any) => T {
        throw new Error("Not implemented");
    }

    getDescription(): string {
        return "";
    }

    undo(): Promise<boolean> {
        throw new Error("Not Implemented");
    }




}
