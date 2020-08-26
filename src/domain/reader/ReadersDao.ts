import {Reader} from "./Reader";

export interface ReadersDao {
    updateReader(reader: Reader): void;

    getReaderByEmail(email: string): Promise<Reader>;

    getReaderById(readerId: string): Reader;

    addReader(email:string): Promise<boolean>
}