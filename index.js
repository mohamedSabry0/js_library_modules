import { DateTime } from './modules/luxon.js';
import { BookList } from './modules/list.js';
import { addBtn, dateBox } from './modules/selectors.js';
import { Handler } from './modules/handlers.js';

const bookList = new BookList();
const handler = new Handler(bookList);
addBtn.addEventListener('click', handler);


dateBox.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

// TODO: list functionality
// TODO: add new functionality
// TODO: display functionality
// TODO: remove functionality
// TODO: storage functionality

// TODO: nav functionality
// TODO: styling
