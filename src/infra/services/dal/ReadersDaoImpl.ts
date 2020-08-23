import Database from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import {ReaderDao} from "../../../domain/reader/ReaderDao";
import {Reader} from "../../../domain/reader/Reader";
import {injectable} from "inversify";

@injectable()
export class ReaderDaoImpl implements ReaderDao{

    private db;

    setup(){
        let adapter = new FileSync("reader.json");
        this.db = Database(adapter);
    }

    getReaderByEmail(email:string): Reader {
        return undefined;
    }

    getReaderById(id:string): Reader {

    }

    updatetReader(reader: Reader): void {

    }

    addReader(reader:Reader):boolean{

        return true;
    }
}