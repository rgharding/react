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
    <div className="book-create">
      <h3>Add a Book</h3>
      <form  onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' onChange={handleChange} value={title}  />
        <button className='button'>Create!</button>
      </form>
     
    </div>
  );
};


export default BookCreate;