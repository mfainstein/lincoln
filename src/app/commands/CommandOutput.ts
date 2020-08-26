export interface CommandOutput {
    commandName: string;
    success: boolean;
    executionTimeMs: number;
    errors:string[];
}