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

  return (
    <div className='app'>
      <BookList books={books} onDelete={onBookDelete} />
      <BookCreate onSubmit={onBookCreate} />
    </div>
  );
};



export default App;