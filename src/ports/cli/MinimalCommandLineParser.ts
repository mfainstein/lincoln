import {AppTypes} from "../../app/AppTypes";
import {inject, injectable} from "inversify";
import {CommandLineParser} from "./CommandLineParser";
import {ReaderConfig} from "./ReaderConfig";
import {Requester} from "cote";
import {LincolnRespond} from "../../app/LincolnRespond";

@injectable()
export class MinimalCommandLineParser implements CommandLineParser {

    private executeCommandAux(commandName: string, data: any): void {
        const requester:Requester = new Requester({ name: 'CliClient'});
        requester.send(data).then((respond:LincolnRespond)=>{
            process.stdout.write(JSON.stringify(respond));
        }).catch((respond:LincolnRespond)=>{
            process.stderr.write("Error executing command " + commandName + ":");
            process.stderr.write(JSON.stringify(respond));
        });
    }

    private parseData(commandName: string, stringData: string): any {
        let data: any = {};
        try {
            data = JSON.parse(stringData);
        } catch (e) {
            throw new Error("Error executing command " + commandName + ": could not parse input: " + e)
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