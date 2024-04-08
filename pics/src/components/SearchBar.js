import { useState } from 'react';
import './SearchBar.css'


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
    <div className='search-bar'>
      
      <form onSubmit={handleFormSubmit}>
        <lable>Enter Search Term</lable>
        <input  value={term} onChange={handleChange} />
      </form>
    </div>
  );
}


export default SearchBar;