import {injectable} from "inversify";
import {Command} from "./Command";
import {CommandBase} from "./CommandBase";
import {CommandInput} from "./CommandInput";
import {CommandOutput} from "./CommandOutput";

@injectable()
export class ConfigureCommand extends CommandBase {
    doExecute(input: CommandInput): Promise<CommandOutput> {
        setTimeout(()=>{
            console.log("Do some async stuff");
        }, 1000)
    }


}

class ConfigureCommandOutput implements CommandOutput {
    commandName: "";
    errors: string[];
    executionTimeMs: number;
    success: boolean;

}

