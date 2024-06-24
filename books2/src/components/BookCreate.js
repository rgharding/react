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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Book</label>
        <input onChange={handleChange} value={title}/>
        <button>Save</button>
      </form>
    </div>
  );
};


export default BookCreate;