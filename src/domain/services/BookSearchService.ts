import {Edition} from "../books/Edition";


export class BookSearchService {
    async search() {
        const {Akademibokhandeln, Adlibris} = require('book-api');
        const source = new Adlibris();
        // Search for books
        source.search('Test Driven Development')
            .then((books:Edition[]) => {
                source.fetch(books[0]).then((book:Edition) => {
                    console.log(JSON.stringify(book, null, 2));
                });
            }).catch((e:any)=>{
                console.log(e);
        });
    }
}