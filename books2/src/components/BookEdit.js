import { useState } from 'react';

function BookEdit(props) {

  const { book, onSubmit } = props

  const [ newTitle, setNewTitle ] = useState(book.title); 

  const hanldeSubmit = (event) => {
    event.preventDefault();
    onSubmit(newTitle, book.id);
    
  }


  const handleChange = (event) => {
    setNewTitle(event.target.value);

  }

  
  return (
    <div className='book-edit'>
      <form onSubmit={hanldeSubmit}>
        <label>Title</label>
        <input className='input' onChange={handleChange} value={newTitle}/>
        <button className='button is-primary'>Save</button>
      </form>
    </div>
  );
};


export default BookEdit;