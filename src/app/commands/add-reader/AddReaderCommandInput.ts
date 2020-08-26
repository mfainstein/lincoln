import {CommandInput} from "../CommandInput";

export interface AddReaderCommandInput extends CommandInput{
    email:string;
}