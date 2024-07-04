import BookShow from './BookShow';

function BookList(props) {

  const { books } = props;

  const updatedList = books.map(book => {
    return <BookShow book={book} />
  });
 
  return (
    <div>
      {updatedList}
    </div>
  );
};


export default BookList;