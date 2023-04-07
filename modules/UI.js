import { awesomeBook, saveToLocalStorage } from './DBMsystem.js';

/* eslint-disable */
const removeBtnOnClick = (id) => {
  alert('remove')
  awesomeBook.removeBook(id);
  displayBooklist(awesomeBook.books);
  saveToLocalStorage();
};
/* eslint-enable */

const displayBooklist = (bookList) => {
  document.getElementById('booklist-content').innerHTML = bookList.map((book) => `
  <article id="book-${book.id}">
    <p><span class="title">"${book.title}"</span> by <span class="author">${book.author}</span></p>
    <button class="btn" onClick="removeBtnOnClick('${book.id}')" type="button" id="${book.id}">Remove</button>
  </article>
  `).join('');
};

displayBooklist(awesomeBook.books);

const onSubmitHandlerAddForm = (e) => {
  e.preventDefault();
  awesomeBook.addBook(e.target[0].value, e.target[1].value);
  displayBooklist(awesomeBook.books);
  saveToLocalStorage();
  e.target.reset();
};

export default onSubmitHandlerAddForm;