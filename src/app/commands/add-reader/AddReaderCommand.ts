import {CommandBase} from "../CommandBase";
import {CommandOutput} from "../CommandOutput";
import {DomainTypes} from "../../../domain/DomainTypes";
import {ReadersDao} from "../../../domain/reader/ReadersDao";
import {inject} from "inversify";
import {AddReaderCommandInput} from "./AddReaderCommandInput";
import {AddReaderCommandOutput} from "./AddReaderCommandOutput";
import validate from "./AddReaderCommandInputValidator";
import {Reader} from "../../../domain/reader/Reader";


export class AddReaderCommand extends CommandBase {

    constructor(@inject(DomainTypes.ReadersDao) private readersDao: ReadersDao) {
        super();
    }

    async doExecute(input: AddReaderCommandInput): Promise<CommandOutput> {
        return new Promise(async (resolve, reject) => {
            let readerAdded: boolean = await this.readersDao.addReader(input.email);
            let reader:Reader = await this.readersDao.getReaderByEmail("asdasd@asdasd.com");
            console.log(reader.readerId);
            let commandOutput:AddReaderCommandOutput = new AddReaderCommandOutput();
            //never reject?
            commandOutput.alreadyExists = !readerAdded;
            resolve(commandOutput)

        });

    }

    getInputValidator<AddReaderCommandInput>(): (value: any) => AddReaderCommandInput {
        return validate;
    }

    undo(): Promise<boolean> {
        throw new Error("Not Implemented");
    }

    getDescription(): string {
        return "";
    }

}