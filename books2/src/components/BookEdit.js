import { useState } from 'react';

function BookEdit(props) {

  const { book } = props

  const [ newTitle, setNewTitle ] = useState(book.title); 

  return (
    <div>
      <form>
        <input value={newTitle}/>
      </form>
    </div>
  );
};


export default BookEdit;