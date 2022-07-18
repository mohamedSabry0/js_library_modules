import { listElem } from './selectors.js';
import RemoveHandler from './remove_handler.js';

class Display {
  constructor(storage) {
    this.storage = storage;
  }

  displayList() {
    this.storage.getList().forEach((element) => { this.addBook(element); });
  }

  addBook(book) {
    const bookCard = document.createElement('ul');
    const titleText = document.createElement('li');
    const authorText = document.createElement('li');
    const removeBtn = document.createElement('button');

    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remvBtn');

    titleText.textContent = book.title;
    authorText.textContent = `by ${book.author}`;
    const rmvHandler = new RemoveHandler(this.storage);

    removeBtn.addEventListener('click', rmvHandler);

    listElem.appendChild(bookCard);
    bookCard.append(titleText, authorText, removeBtn);
  }
}

export default Display;
