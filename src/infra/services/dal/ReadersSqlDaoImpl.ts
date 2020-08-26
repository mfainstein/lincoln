import { SQLite } from "@nano-sql/adapter-sqlite";
import { nSQL } from "@nano-sql/core";
import {Reader} from "../../../domain/reader/Reader";
import {inject, injectable} from "inversify";
import {ReadersDao} from "../../../domain/reader/ReadersDao";
import {InfraTypes} from "../../InfraTypes";
import {SqlDatabaseService} from "../database/SqlDatabaseService";
import {ReaderAttributes} from "../../../domain/reader/ReaderAttributes";

@injectable()
export class ReadersSqlDaoImpl implements ReadersDao {

    private databaseInitialized:boolean;

    constructor(@inject(InfraTypes.SqlDatabaseService) private database:SqlDatabaseService) {
        this.databaseInitialized = false;
    }

    async getReaderByEmail(email: string): Promise<Reader> {
        await this.databaseInit();
        let reader:any = await this.database.selectByColumnProperty("readers", ["email", "=", email]);
        let readerId = reader.readerId;
        let attributes:ReaderAttributes = {
            firstName: "",
            lastName: ""
        };
        return {readerId, attributes};


    }

    /*getReaderById(id: string): Reader {

    }*/

    async addReader(email:string): Promise<boolean> {
        await this.databaseInit();
        try{
            await this.database.insert(
                "readers",
                [{readerId:"asdasd13",email:"asdasd@asdasd.com", firstName: "asdasda", lastName: "asdasd"}]
            );
            return true;
        }
        catch (e) {
            return false;
        }

    }

    updateReader(reader: Reader): void {
    }

    getReaderById(readerId: string): Reader {
        throw new Error("Not Implemented");
    }

    private async databaseInit() {
        if (!this.databaseInitialized){
            await this.database.connect();
            await this.database.createTable("readers", {
                "readerId:string": {pk: true}, // pk = primary key, ai = auto increment
                "email:string": {default: "none", notNull: true},
                "firstName:string": {default: "none", notNull: true},
                "lastName:string": {default: "none", notNull: true}
            });
            this.databaseInitialized = true;
        }



    }
}