import {injectable} from "inversify";
import {Command} from "./Command";
import {CommandOutput} from "./CommandOutput";
import {SheleveCommandInput} from "./SheleveCommandInput";
@injectable()
export class ShelveCommand implements Command {

    execute(input:SheleveCommandInput): Promise<CommandOutput> {
        console.log("AddBookCommand command executing...");
        return new Promise(() => {});
    }

    undo(): Promise<any> {
        return new Promise(() => {});
    }


}
