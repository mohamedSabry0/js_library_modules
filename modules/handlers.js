import { titleInput, authorInput } from './selectors.js';
import Book from './book.js';

class Handler {
  constructor(list) {
    this.bookList = list;
  }

  handleEvent(event) {
    this[event.target.id.split('-')[0]](event);
  }

  add() {
    const book = new Book(titleInput.value, authorInput.value);
    this.bookList.listAdd(book);
  }

  remove() {

  }
}

// two inner listeners: add, and nav. one external: remove
// export listeners to index, and export removeListener to display

export { Handler };
