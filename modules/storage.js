class Storage {
  constructor(bookList = []){
    this.bookList = bookList;
  }

  listAdd(Book) {
    this.list.push(Book);
  }

  listRemove(book_index) {
    this.list = this.list.filter((_book, index) => index != book_index);
  }
}

export default Storage;
