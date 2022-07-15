import { DateTime } from './modules/luxon.js';
import { BookList } from './modules/list.js';
import { addBtn, dateBox } from './modules/selectors.js';
import { AddHandler } from './modules/add_handler.js';

import Display from './modules/display.js';

const display = new Display();

const bookList = new BookList();
const addHandler = new AddHandler(bookList, display);
addBtn.addEventListener('click', addHandler);

// [...document.getElementsByClassName('remove')].forEach(btn => {
//   btn.addEventListener('click', handler);
// })

dateBox.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

// TODO: list functionality
// TODO: add new functionality
// TODO: display functionality
// TODO: remove functionality
// TODO: storage functionality

// TODO: nav functionality
// TODO: styling
