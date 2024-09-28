import { useState } from "react";

function BookCreate(props) {

  const { onCreate } = props

  const [ title, setTitle ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('')
  }

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  return (
    
    <div className='book-create'>
      
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange} className='input' />
        <button className='button' >Save</button>
      </form>

    </div>
  )
};

export default BookCreate;