import { titleInput, authorInput } from './selectors.js';
import Book from './book.js';

class AddHandler {
  constructor(list, display) {
    this.bookList = list;
    this.display = display;
  }

  handleEvent(event) {
    console.log(event.target.classList[0]);
    const book = new Book(titleInput.value, authorInput.value);
    this.bookList.listAdd(book);
    this.display.addBook(book);
    // this['add'](event);
  }

  // add() {

  // }

}

// two inner listeners: add, and nav. one external: remove
// export listeners to index, and export removeListener to display

export { AddHandler };
