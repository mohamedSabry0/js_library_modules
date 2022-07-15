class Storage {
  constructor(){
    this.bookList = this.getList();
  }

  getList(){
    return JSON.parse(localStorage.getItem('books')) || [];
  }

  listAdd(Book) {
    this.bookList.push(Book);
    localStorage.setItem('books', JSON.stringify(this.bookList));
  }

  listRemove(book_index) {
    this.bookList = this.bookList.filter((_book, index) => index != book_index);
    localStorage.setItem('books', JSON.stringify(this.bookList));
  }
}

export default Storage;
