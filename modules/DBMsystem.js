import AwesomeBook from './classes.js';

const bookList = [
  {
    id: '1',
    title: 'Handook',
    author: 'Jemson',
  },
  {
    id: '2',
    title: 'To the hole',
    author: 'Jem',
  },
  {
    id: '3',
    title: 'Fly high',
    author: 'Jakson',
  },
  {
    id: '4',
    title: 'HWelcome to India',
    author: 'Ali khan',
  },
];

const awesomeBook = new AwesomeBook();

// Local storage
const saveToLocalStorage = () => {
  localStorage.setItem('newBook', JSON.stringify(awesomeBook.books));
};
const localBooks = JSON.parse(localStorage.getItem('newBook'));

if (localBooks === null) {
  awesomeBook.books = bookList;
} else {
  awesomeBook.books = localBooks;
}

export { awesomeBook, saveToLocalStorage };