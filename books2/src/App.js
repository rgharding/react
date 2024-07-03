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

const updatedList = () => {
  return <BookList book={books} />
}


  return (
    <div>
      <BookList  books={books}/>
      <BookCreate onSubmit={onBookCreate} />
    </div>
  );
};



export default App;