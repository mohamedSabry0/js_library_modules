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
    titleInput.value = '';
    authorInput.value = '';
  }
}

export default AddHandler;
