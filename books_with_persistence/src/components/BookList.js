import BookShow from './BookShow';

function BookList(props) {

  const { books } = props

  const renderedBook = books.map(book => {
    return <BookShow  book={book} key={book.id} />
  })

  return (
    <div className='book-list' >
      {renderedBook}
    </div>
  );
};

export default BookList;