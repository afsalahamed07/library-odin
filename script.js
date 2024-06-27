const dialog = document.querySelector( "dialog" );
const addButton = document.querySelector( "#add-book" );
const closeButton = document.querySelector( "#close-dialog" );
const addBookForm = document.querySelector( "#add-book-form" );
const removeBookButtons = document.querySelectorAll( ".remove-btn" );

addButton.addEventListener( "click", () => {
    dialog.showModal();
} );

closeButton.addEventListener( "click", () => {
    dialog.close();
} );

addBookForm.addEventListener(
    "click",
    ( event ) => {
        event.preventDefault();
        const title = document.querySelector( "#title" ).value;
        const author = document.querySelector( "#author" ).value;
        const pages = document.querySelector( "#pages" ).value;
        const read = document.querySelector( "#read" ).checked;
        const book = new Book( title, author, pages, read );
        addBookToLibrary( book );
        appendBookToLibrary( book );
        dialog.close();
    }
);

removeBookButtons.forEach( button => button.addEventListener
     ( "click", () => {
        console.log( "removeBookButton" );

        // grab the parent div
        let parentDiv = button.parentElement.parentElement;

        let id = parentDiv.id;

        // remove the book from the DOM
        parentDiv.remove();

        // remove the book from the library
        const book = myLibrary.find( book => `book-${ book.id }` === id );
        removeBookFromLibrary( book );
    } )
);