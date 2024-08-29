import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function getRandomNumber() {
  return Math.floor(Math.random() * 99999)
}

function App() {

  const [ books, setBooks ] = useState([]);

  const onBookCreate = (title) => {
    let newBook = {title: title, id: getRandomNumber()}
    setBooks([...books, newBook]);
  }


  const onBookDelete = (id) => {
    const updateBooks = books.filter(book => {
      return book.id !== id;
    });

    setBooks(updateBooks);
  } 


  const onBookEdit = ((newTitle, id) => {
    const updateBooks = books.map(book => {
      if (book.id === id) {
        return {...book, title: newTitle}
      }

      return book;
    });

    setBooks(updateBooks)
  });

  
  return (
    <div className='app'>
      <h3 className='title'>Title</h3>
      <BookList books={books} onDelete={onBookDelete} onEdit={onBookEdit} />
      <BookCreate onSubmit={onBookCreate} />
    </div>
  );
};



export default App;