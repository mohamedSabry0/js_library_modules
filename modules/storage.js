class Storage {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem('books')) || [];
  }

  getList() {
    return this.bookList;
  }

  listAdd(Book) {
    this.bookList.push(Book);
    localStorage.setItem('books', JSON.stringify(this.bookList));
  }

  listRemove(bookIndex) {
    this.bookList = this.bookList.filter((_book, index) => index !== bookIndex);
    localStorage.setItem('books', JSON.stringify(this.bookList));
  }
}

export default Storage;
