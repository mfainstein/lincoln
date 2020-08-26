export interface SqlDatabaseService {

    connect(): Promise<{ [key: string]: any; }[]>;

    createTable(name: string, model: any): Promise<{ [key: string]: any; }[]>;

    insert(tableName: string, args: any[]): Promise<{ [key: string]: any; }[]>;

    selectByColumnProperty(tableName:string, args:any[]): Promise<{ [key: string]: any; }[]>;

}