import BookEdit from './BookEdit';
import { useState } from 'react';

function BookShow(props) {


const { book, onDelete } = props;

const [showEdit, setShowEdit ] = useState(false);

const handleDeleteClick = () => {
  onDelete(book.id);
}

const handleEditClick = () => {
  setShowEdit(!showEdit)
}


let content = <h3>{book.title}</h3>
if (showEdit) {
  content = <BookEdit boook={book} />
}

  return (
    <div className='book-show'>
      <div>{content}</div>
      
      <div className='actions'>
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={handleEditClick}>Edit</button>
      </div>
    </div>
  );
};


export default BookShow;