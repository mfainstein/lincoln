import {SQLite} from "@nano-sql/adapter-sqlite";
import {nSQL} from "@nano-sql/core";
import {SqlDatabaseService} from "./SqlDatabaseService";
import {injectable} from "inversify";

@injectable()
export abstract class SqlDatabaseServiceBase implements SqlDatabaseService {


    abstract connect(): Promise<{ [key: string]: any; }[]>;

    createTable(name: string, model: any): Promise<{ [key: string]: any; }[]> {
        return nSQL().query("create table", {
            name: name,
            model: model
        }).exec();
    }

    insert(tableName: string, args: any[]) {
        return nSQL(tableName)
            .query("upsert", args)
            .exec();
    }

    selectByColumnProperty(tableName:string, args:any[]){
        return nSQL(tableName)
            .query("select").where(args)
            .exec();
    }




}