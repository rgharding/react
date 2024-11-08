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


  const onBookDelete = (id) => {
    let updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  }


  const onBookEdit = (newTitle, id) => {
    let updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title: newTitle}
      } else {
        return book;
      }
    });

    setBooks(updatedBooks);
  }

  
  return (
    <div className="app">
      <h3 className='title'>Books</h3>
      <BookList books={books} onDelete={onBookDelete} onEdit={onBookEdit}/>
      <BookCreate onCreate={onBookCreate} />
    </div>
  );
};


export default App;