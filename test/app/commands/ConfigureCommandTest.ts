import {Command} from "../../../src/app/commands/Command";
import {expect} from 'chai';
import "reflect-metadata";
import {ConfigureCommand} from "../../../src/app/commands/configure/ConfigureCommand";
import {CommandOutput} from "../../../src/app/commands/CommandOutput";

describe('ConfigureCommand', () => {

    let configureCommand: Command | undefined;
    before(() => {
        configureCommand = new ConfigureCommand();
    });

    it('should have a description', () => {
        if (configureCommand) {
            expect(configureCommand.getDescription()).not.empty;
        }
    });

    it('the execution name should be :configure:', () => {
        if (configureCommand) {
            expect(configureCommand.getExecutionName()).to.equal('configure');
        }
    });

    it('should execute without errors', async () => {
        if (configureCommand) {
            configureCommand.setInput({
                readerId:"dummy"
            });
            let commandOutput: CommandOutput = await configureCommand.execute();
            expect(commandOutput.errors.length).to.equal(0);
            expect(commandOutput.success).to.equal(true);
        }
    });
});