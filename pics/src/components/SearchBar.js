import { useState } from 'react';


function SearchBar(props) {

  const { onSearchSubmit } = props;
  const [term , setTerm ] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    onSearchSubmit(term)
    setTerm('');
  }


  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div>
      
      <form onSubmit={handleFormSubmit}>
        <input  value={term} onChange={handleChange} />
      </form>
    </div>
  );
}


export default SearchBar;