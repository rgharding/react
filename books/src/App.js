import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {

  const [ books, setBooks ] = useState([]);

  const getRandomNumber = () => {
    return Math.round(Math.random() * 999999);
  }
  const createBook = (title) => {
     setBooks([...books, {title: title, id: getRandomNumber()}]);
    }

    console.log(books)
  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
};


export default App;