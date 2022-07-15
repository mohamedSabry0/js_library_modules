import { titleInput, authorInput } from './selectors.js';
import Book from './book.js';

class AddHandler {
  constructor(list, display, storage) {
    this.bookList = list;
    this.display = display;
    this.storage = storage;
  }

  handleEvent() {
    const book = new Book(titleInput.value, authorInput.value);
    // this.bookList.listAdd(book);
    this.storage.listAdd(book);
    this.display.addBook(book);

  }

  // add() {

  // }

}

// two inner listeners: add, and nav. one external: remove
// export listeners to index, and export removeListener to display

export { AddHandler };
