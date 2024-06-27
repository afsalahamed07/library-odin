const dialog = document.querySelector("dialog");
const addButton = document.querySelector("#add-book");
const closeButton = document.querySelector("#close-dialog");
const addBookForm = document.querySelector("#add-book-form");

addButton.addEventListener("click", () => {
   dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

addBookForm.addEventListener(
    "click",
    (event) => {
        event.preventDefault();
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector("#read").checked;
        const book = new Book(title, author, pages, read);
        addBookToLibrary(book);
        appendBookToLibrary(book);
        dialog.close();
    }
);


