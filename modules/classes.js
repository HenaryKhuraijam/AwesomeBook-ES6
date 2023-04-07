class AwesomeBook {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const id = Date.now().toString();
    this.books.push({ id, title, author });
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}

export default AwesomeBook;