import { DateTime } from './modules/luxon.js';
import { addBtn, dateBox } from './modules/selectors.js';
import AddHandler from './modules/add_handler.js';
import NavHandler from './modules/nav_handler.js';


import Storage from './modules/storage.js';
import Display from './modules/display.js';

const navHandler = new NavHandler();
const nav = document.getElementById('nav-list');
nav.addEventListener('click', navHandler);

const storage = new Storage();

const display = new Display(storage);
display.displayList();

const addHandler = new AddHandler(display, storage);
addBtn.addEventListener('click', addHandler);

dateBox.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

// TODO: list functionality
// TODO: add new functionality
// TODO: display functionality
// TODO: remove functionality
// TODO: storage functionality

// TODO: nav functionality
// TODO: styling
