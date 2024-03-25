import { useState } from 'react'
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import api from './api'
import searchImages from './api';

function App() {

  const [ images, setImages ] = useState([]);

  const searchTerm = async (term) => {
    let result = await searchImages(term);

    setImages(result);
  }

  
  return (
    <div>
      <SearchBar  onSearchSubmit={searchTerm} />
      <ImageList images={images} />
    </div>
  );
}


export default App;