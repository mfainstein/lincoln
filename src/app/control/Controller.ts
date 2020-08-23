import {UiCommand} from "../../ui/interfaces/UiCommand";

export interface IController {
    executeUiCommand(uiCommand: UiCommand): void;
}