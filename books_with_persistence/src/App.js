import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


const getRandomId = () => {
  return Math.floor(Math.random() * 99999);
}



function App() {

  const [ books, setBooks ] = useState([]);

  const onBookCreate = (title) => {
    let newBook = { title: title, id: getRandomId() }
    let updatedBooks = [newBook, ...books];
    setBooks(updatedBooks)
  }

  
  return (
    <div>
      <BookList books={books} />
      <BookCreate onCreate={onBookCreate} />
    </div>
  );
};


export default App;