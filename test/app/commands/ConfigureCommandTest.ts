import {expect} from 'chai';
import "reflect-metadata";
import {ConfigureReaderRequest} from "../../../src/app/services/readers/requests/ConfigureReaderRequest";
import {ReadingSpeed} from "../../../src/domain/reading/ReadingSpeed";
import {ReadingMedium} from "../../../src/domain/reading/ReadingMedium";
import {appContainer} from "../../../src/app/AppContainer";
import {AppService} from "../../../src/app/services/AppService";
import {AppTypes} from "../../../src/app/AppTypes";

describe('ConfigureCommand', () => {

    let configureRequest: ConfigureReaderRequest;
    before(() => {
        configureRequest = {
            type: "configure-reader",
            token: "TEST",
            reader: {
                firstName: "Mark",
                lastName: "Fainstein",
                multiReading: false
            }
        }
    });



    /*it('should execute without errors', async () => {
        if (configureRequest) {
            configureRequest.setInput({
                readerId:"dummy"
            });
            //let commandOutput: CommandOutput = await configureCommand.execute();
            //expect(commandOutput.errors.length).to.equal(0);
            //expect(commandOutput.success).to.equal(true);
        }
    });*/
});