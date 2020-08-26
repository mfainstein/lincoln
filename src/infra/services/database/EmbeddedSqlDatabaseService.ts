import {SqlDatabaseServiceBase} from "./SqlDatabaseServiceBase";
import {nSQL} from "@nano-sql/core";
import {SQLite} from "@nano-sql/adapter-sqlite";
import {injectable} from "inversify";

@injectable()
export class EmbeddedSqlDatabaseService extends SqlDatabaseServiceBase {

    private static LOCAL_FILE_NAME = "db/sql.db";
    private static ID = "id";

    connect(): Promise<{ [p: string]: any }[]> {
        return nSQL().createDatabase({
            id: EmbeddedSqlDatabaseService.ID,
            mode: new SQLite(EmbeddedSqlDatabaseService.LOCAL_FILE_NAME)
        });
    }

}