import { listElem } from './selectors.js';
import { removeHandler } from './remove_handler.js';
class Display {
  addBook(book) {
    const bookCard = document.createElement('ul');
    const titleText = document.createElement('li');
    const authorText = document.createElement('li');
    const removeBtn = document.createElement('button');
    // removeBtn.classList.add('remove');

    removeBtn.textContent = 'Remove';
    titleText.textContent = book.title;
    authorText.textContent = ' ' + `by ${book.author}`;

    removeBtn.addEventListener('click', removeHandler);

    listElem.appendChild(bookCard);
    bookCard.append(titleText, authorText, removeBtn);
  }
}

export default Display;
