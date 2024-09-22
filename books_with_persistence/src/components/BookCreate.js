import { useState } from "react";

function BookCreate() {

  const [ title, setTitle ] = useState('');

  return (
    
    <div className='book-create'>
      <form>
        <input className='input' />
        <button className='button' >Save</button>
      </form>
    </div>
  )
};

export default BookCreate;