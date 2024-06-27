const myLibrary = [];

// some random books
const book1 = new Book( "The Hobbit", "J.R.R. Tolkien", 295, true );
const book2 = new Book( "The Lord of the Rings", "J.R.R. Tolkien", 1178, false );
const book3 = new Book( "The Silmarillion", "J.R.R. Tolkien", 365, true );

addBookToLibrary( book1 );
addBookToLibrary( book2 );
addBookToLibrary( book3 );

renderLibrary();

function Book( title, author, pages, read ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return `${ this.title } by ${ this.author }, ${ this.pages } pages, ${ this.read ? "read" : "not read yet" }`;
    }
}

function addBookToLibrary( book ) {
    console.log(`adding ${ book.title } to library`)
    myLibrary.push( book );
}

function removeBookFromLibrary( book ) {
    const index = myLibrary.indexOf( book );
    if ( index !== -1 ) {
        myLibrary.splice( index, 1 );
    }
}

function renderBook( book ) {
    return `<div class="book flex flex-row gap-4 shadow-md rounded-md">
        <div class="basis-1/3 p-4 font-bold">${ book.title }</div>
        <div class="basis-1/4 p-4">Author: ${ book.author }</div>
        <div class="basis-1/4 p-4">Pages: ${ book.pages }</div>
        <div class="basis-1/4 p-4">Status: ${ book.read ? "read" : "not read yet" }</div>
    </div>`;
}

function renderLibrary() {
    console.log( "renderLibrary" )
    myLibrary.map( book => {
        console.log( "book", book )
        document.getElementById( "library" ).innerHTML += renderBook( book );
    } );
}

function appendBookToLibrary( book ) {
    document.getElementById( "library" ).innerHTML += renderBook( book );
}

