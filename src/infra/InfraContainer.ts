import {Container} from "inversify";
import {ReadersDao} from "../domain/reader/ReadersDao";
import {DomainTypes} from "../domain/DomainTypes";
import {ReadersSqlDaoImpl} from "./services/dal/ReadersSqlDaoImpl";
import {domainContainer} from "../domain/DomainContainer";
import {InfraTypes} from "./InfraTypes";
import {EmbeddedSqlDatabaseService} from "./services/database/EmbeddedSqlDatabaseService";
import {SqlDatabaseService} from "./services/database/SqlDatabaseService";


const infraContainer = new Container();
domainContainer.bind<SqlDatabaseService>(InfraTypes.SqlDatabaseService).to(EmbeddedSqlDatabaseService).inSingletonScope();

export {infraContainer};