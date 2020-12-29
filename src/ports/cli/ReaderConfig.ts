import * as fs from "fs";

export class ReaderConfig {

    private static DEFAULT_USER_EMAIL = "lincoln@whitehouse.com";
    private static READER_CONFIG_PATH = "config/reader.json";

    public static create(): void {
        fs.writeFileSync(ReaderConfig.READER_CONFIG_PATH, JSON.stringify({
            email: ReaderConfig.DEFAULT_USER_EMAIL
        }));
    }

    public static exists(): boolean {
        return fs.existsSync(ReaderConfig.READER_CONFIG_PATH);
    }


    public static read(): any {
        if (!this.exists()) {
            return {};
        }
        let configBuffer: Buffer = fs.readFileSync(ReaderConfig.READER_CONFIG_PATH);
        let config: any;
        try {
            config = JSON.parse(configBuffer.toString());
        } catch (e) {
            config = {};
        }
        return config;
    }
}

