import { useState } from 'react';
import BookEdit from './BookEdit';
 
function BookShow(props) {

  const { book, onDelete, onEdit } = props;

  const [ showEdit, setShowEdit ] = useState(false);
 
  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };


  let content = <h3>{book.title}</h3>

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  }

  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />
  }

  return (
    <div className="book-show" >
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='random pic' />
      <div>{content}</div>
      
      <div className='actions'>
       <button className='delete' onClick={handleDeleteClick}>Delete</button>
       <button className='edit' onClick={handleEditClick}>Edit</button>
      </div>
    </div>
  );
};


export default BookShow;