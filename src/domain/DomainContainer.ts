import {Container} from "inversify";
import {DomainTypes} from "./DomainTypes";
import {ReadersSqlDaoImpl} from "../infra/services/dal/ReadersSqlDaoImpl";
import {ReadersDao} from "./reader/ReadersDao";


const domainContainer = new Container();
domainContainer.bind<ReadersDao>(DomainTypes.ReadersDao).to(ReadersSqlDaoImpl).inSingletonScope();

export {domainContainer};