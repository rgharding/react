function BookShow(props) {

  const { book } = props;


  return (
    <div>
      {book.title}
    </div>
  );
};

export default BookShow;