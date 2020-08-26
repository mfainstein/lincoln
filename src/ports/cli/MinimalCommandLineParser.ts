import {AppTypes} from "../../app/AppTypes";
import {inject, injectable} from "inversify";
import {Controller} from "../../app/control/Controller";
import {CommandLineParser} from "./CommandLineParser";
import {CommandOutput} from "../../app/commands/CommandOutput";
import {ReaderConfig} from "./ReaderConfig";

@injectable()
export class MinimalCommandLineParser implements CommandLineParser {

    constructor(@inject(AppTypes.Controller) private controller: Controller) {
    }

    private executeCommandAux(commandName: string, data: any): void {
        let commandPromise: Promise<CommandOutput> = this.controller.executeCommand(commandName, data);
        commandPromise.then((output: CommandOutput) => {
            process.stdout.write(JSON.stringify(output));

        }).catch((output: CommandOutput) => {
            process.stderr.write("Error executing command " + commandName + ":");
            process.stderr.write(JSON.stringify(output));
        });
    }

    private parseData(commandName: string, stringData: string): any {
        let data: any = {};
        try {
            data = JSON.parse(stringData);
        } catch (e) {
            process.stderr.write("Error executing command " + commandName + ": could not parse input: " + e);
        }
        return data;
    }

    private async executeCommand(commandName: string, stringData: string): Promise<void> {
        console.log(commandName + " " + stringData);
        let data:any = this.parseData(commandName, stringData);
        this.executeCommandAux(commandName, data);

    }

    public parse(customParser?: (args: string[]) => void): void {
        if (customParser) {
            customParser(process.argv);
            return;
        }
        let args: string[] = process.argv;
        let commandName = args[2];
        let stringData = args[3];

        //ignore the promise result
        this.executeCommand(commandName, stringData);
    }
}