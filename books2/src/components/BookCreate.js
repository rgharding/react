import { useState } from 'react';

function BookCreate(props) {

  const { onSubmit } = props;

  const [ title, setTitle ] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
    setTitle('')
  };
  

  const handleChange = (event) => {
    setTitle(event.target.value);
  }


  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Tilte</label>
        <input className='input' onChange={handleChange} value={title}/>
        <button className="button">Save</button>
      </form>
    </div>
  );
};


export default BookCreate;