import { useState } from 'react';

function BookEdit(props) {

  const {book, onSubmit } = props;

  const [ title, setTitle ] = useState(book.title)

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  }

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  return (
    
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className='input'  value={title} onChange={handleChange}/>
        <button className="button is-primary"> Save </button>
      </form>
      );
};


export default BookEdit;