// import {Book} from './book';

class BookList {
  constructor(storage_list = []) {
    this.list = storage_list;
  }

  listAdd(Book) {
    this.list.push(Book);
  }

  listRemove(book_index) {
    this.list = this.list.filter((_book, index) => index != book_index);
  }
}

export { BookList };
