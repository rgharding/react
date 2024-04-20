import { useState } from 'react';


function BookCreate(props) {
  
  const { onCreate } = props;
  const [ title, setTitle ] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  }

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  return (
    <div>
      Add a Book
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input  onChange={handleChange} value={title}  />
        <button>Create!</button>
      </form>
     
    </div>
  );
};


export default BookCreate;