import { useState } from "react";

function BookEdit(props) {

  const { handleEditSubmit, book} = props

  const [newTitle, setNewTitle ] = useState(book.title) 


  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditSubmit(newTitle, book.id)
    setNewTitle('');
  }


  const handleChange = (event) => {
    setNewTitle(event.target.value);
   }

  return (
    <div>
      <label>Edit Title</label>
      <form onSubmit={handleSubmit} className="book-edit">
        <input value={newTitle} onChange={handleChange} />
        <button className='button is-primary' >Save</button>
      </form>
      
    </div>
  );
};

export default BookEdit;