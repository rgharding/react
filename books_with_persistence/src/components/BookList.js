import BookShow from './BookShow';

function BookList(props) {

  const { books, onDelete, onEdit } = props

  const renderedBook = books.map(book => {
    return <BookShow  book={book} key={book.id}  onDelete={onDelete} onEdit={onEdit}/>
  });

  return (
    <div className='book-list' >
      {renderedBook}
    </div>
  );
};

export default BookList;