import { useState } from 'react';
import BookCreate from './components/BookCreate';


function getRandomNumber() {
  return Math.floor(Math.random() * 99999)
}

function App() {

  const [ books, setBooks ] = useState([]);

  const onBookCreate = (title) => {
    let newBook = {title: title, id: getRandomNumber()}
    setBooks([...books, newBook]);
}


  return (
    <div>
      <BookCreate onSubmit={onBookCreate} />
    </div>
  );
};



export default App;