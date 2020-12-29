import {inject, injectable} from "inversify";
import {TextUtils} from "../../utils/TextUtils";
import {DomainTypes} from "../../../domain/DomainTypes";
import {ReadersDao} from "../../../domain/reader/ReadersDao";
import {Reader} from "../../../domain/reader/Reader";
import {AuthenticationSsoService} from "../../../app/services/auth/AuthenticationSsoService";

@injectable()
export class PermissiveAuthorizationService implements AuthenticationSsoService {

    private static REJECTION_ERROR_MESSAGE = "Authentication Failed";

    constructor(@inject(DomainTypes.ReadersDao) private readersDao: ReadersDao) {}

    //============================================== Config ============================================================
    //<editor-fold desc="Config" >
    //TODO: should move to some config service

    //</editor-fold>

    //============================================== Api ===============================================================
    //<editor-fold desc="API" >

    authenticate(token: any): Promise<string> {
        return new Promise<string>(async(resolve, reject) => {
            let email: string = token;
            //in an actual implementation the email will be deduced from the token

            //lookup the reader, if does not exist - add it
            let reader:Reader = await this.readersDao.getReaderByEmail(email);
            if (!reader || reader.readerId){
                this.readersDao.addReader(TextUtils.md5(email) /*, email*/);
            }
            resolve(reader.readerId);
        });


        //reject(REJECTION_ERROR_MESSAGE);
    }

    //</editor-fold>


}