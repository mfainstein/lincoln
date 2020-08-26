import {injectable} from "inversify";
import {CommandBase} from "../CommandBase";
import {CommandOutput} from "../CommandOutput";
import {ConfigureCommandOutput} from "./ConfigureCommandOutput";
import {ConfigureCommandInput} from "./ConfigureCommandInput";
import validate from './ConfigureCommandInputValidator';

@injectable()
export class ConfigureCommand extends CommandBase {

    doExecute(input: ConfigureCommandInput): Promise<CommandOutput> {
        return new Promise<CommandOutput>(async(resolve, reject) => {
            let commandOutput: ConfigureCommandOutput = new ConfigureCommandOutput();

            resolve(commandOutput);
        });
    }

    undo(): Promise<boolean> {
        throw new Error("Not implemented");
    }

    getInputValidator<ConfigureCommandInput>(): (value: unknown) => ConfigureCommandInput {
        return validate;
    }

    getDescription(): string {
        return "Configure properties related to the reader.";
    }


}



