import { useState } from 'react';
import BookEdit from './BookEdit';


function BookShow(props) {

  const { book, onDelete, onEdit } = props;

  const [ edit, setBookEdit ] = useState(false);

  
  const handleEditClick = (event) => {
    setBookEdit(!edit);
  }


  const handleDeleteClick = () => {
    onDelete(book.id)
  }


  const handleSubmit = (title, id) => {
    onEdit(title, id);
    setBookEdit(false);
  }
  

  let content = <div>{book.title}</div>
  
  if (edit) {
    content = <BookEdit book={book} handleEditSubmit={handleSubmit} />
  }
  
  
  return (
    <div className='book-show'>
      <div>
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} />
      </div>
      <div className='actions'>
        <button onClick={handleEditClick} className='edit'>edit</button>
        <button onClick={handleDeleteClick} className='delete'>delete</button>
      </div>

      {content}
      
    </div>
  );
};

export default BookShow;