export interface CommandLineParser {
    parse(customParser?: (args: string[]) => void):void;
}