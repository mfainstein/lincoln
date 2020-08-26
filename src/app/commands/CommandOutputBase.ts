import {CommandOutput} from "./CommandOutput";
import {inject} from "inversify";
import {AppTypes} from "../AppTypes";
import {CommandsRegistry} from "../registries/CommandsRegistry";

export class CommandOutputBase implements CommandOutput {
    commandName: string;
    errors: string[];
    warnings: string[];
    executionTimeMs: number;
    success: boolean;

    constructor() {
        this.commandName = this.constructor.name;
        this.errors = [];
        this.warnings = [];

    }





}