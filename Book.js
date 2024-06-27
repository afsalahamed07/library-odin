const myLibrary = [];
let bookCounter = 0; // counter is used to index the books

// some random books
const book1 = new Book( "The Hobbit", "J.R.R. Tolkien", 295, true );
const book2 = new Book( "The Lord of the Rings", "J.R.R. Tolkien", 1178, false );
const book3 = new Book( "The Silmarillion", "J.R.R. Tolkien", 365, true );

addBookToLibrary( book1 );
addBookToLibrary( book2 );
addBookToLibrary( book3 );

renderLibrary();

function Book( title, author, pages, read ) {
    this.id = ++bookCounter;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return `${ this.title } by ${ this.author }, ${ this.pages } pages, ${ this.read ? "read" : "not read yet" }`;
    }
}

function addBookToLibrary( book ) {
    console.log( `adding ${ book.title } to library` )
    myLibrary.push( book );
}

function removeBookFromLibrary( book ) {
    const index = myLibrary.indexOf( book );
    if ( index !== -1 ) {
        myLibrary.splice( index, 1 );
    }
}

function renderBook( book ) {
    return `<div id= "book-${ book.id }" class="book flex flex-row gap-4 shadow-md rounded-md">
        <div class="basis-1/3 p-4 font-bold">${ book.title }</div>
        <div class="basis-1/4 p-4">${ book.author }</div>
        <div class="basis-1/4 p-4">${ book.pages }</div>
        <div class="basis-1/4 p-4 flex flex-row gap-2">
            <p class="status basis-2/3">
                ${ book.read ? "read" : "not read yet" }
            </p>
            <label class="tems-center cursor-pointer">
                  <input ${ book.read ? checked = "checked" : "" } type="checkbox" value="" class="status-check sr-only peer">
                  <div class="relative w-11 h-6 bg-red-600 peer-focus:outline-none 
                   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                   peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
        <div class="basis-1/12 p-4">
            <button class="remove-btn px-2 font-bold rounded-full border border-red-500 hover:bg-red-500
            hover:text-white">-</button>
        <div>
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

