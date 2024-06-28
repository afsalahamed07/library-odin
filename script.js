const dialog = document.querySelector("dialog");
const addButton = document.querySelector("#add-book");
const closeButton = document.querySelector("#close-dialog");
const addBookForm = document.querySelector("#add-book-form");
const library = document.querySelector("#library"); // using event delegation

addButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

addBookForm.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  dialog.close();

  // conisitancy
  appendBookToLibrary(book);
});

library.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-btn")) {
    console.log("removeBookButton");

    // grab the parent div
    let parentDiv = event.target.parentElement.parentElement;
    let id = parentDiv.id;

    console.log(parentDiv);

    // remove the book from the DOM
    parentDiv.remove();

    // remove the book from the library
    const book = myLibrary.find((book) => `book-${book.id}` === id);
    removeBookFromLibrary(book);
  }
});

library.addEventListener("click", (event) => {
  if (event.target.classList.contains("status-check")) {
    let parentDiv = event.target.parentElement.parentElement.parentElement;
    let id = parentDiv.id;

    let status = parentDiv.querySelector(".status");

    event.target.checked
      ? (status.textContent = "Read")
      : (status.textContent = "Not Read Yet");

    const book = myLibrary.find((book) => `book-${book.id}` === id);
    book.read = !book.read;
  }
});
