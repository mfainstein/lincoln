import {CommandOutputBase} from "../CommandOutputBase";

export class AddReaderCommandOutput extends CommandOutputBase {
    alreadyExists: boolean;
    readerId: string;
}