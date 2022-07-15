import { titleInput, authorInput } from './selectors.js';
import Book from './book.js';

class AddHandler {
  constructor(display, storage) {
    this.display = display;
    this.storage = storage;
  }

  handleEvent() {
    const book = new Book(titleInput.value, authorInput.value);
    this.storage.listAdd(book);
    this.display.addBook(book);
  }
}

// two inner listeners: add, and nav. one external: remove
// export listeners to index, and export removeListener to display

export default AddHandler;
