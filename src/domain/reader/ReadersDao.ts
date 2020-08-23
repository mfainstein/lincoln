import {Reader} from "./Reader";

export interface ReaderDao {
    setReader(reader: Reader): void;

    getReaderByEmail(): Reader;
}