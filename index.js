import { DateTime } from './modules/luxon.js';
import { BookList } from './modules/list.js';
import { addBtn } from './modules/selectors.js';
import { Handler } from './modules/handlers.js';

// console.log('test')
// console.log(Handler);

const bookList = new BookList();
const handler = new Handler(bookList);
addBtn.addEventListener('click', handler);

// TODO: list functionality
// TODO: add new functionality
// TODO: remove functionality
// TODO: storage functionality
// TODO: date functionality
// TODO: nav functionality
