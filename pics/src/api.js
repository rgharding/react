import axios from 'axios';

const searchImages = async (term) => {
  const responce = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID Liz4NUL81jDIJ1mATfih-Xbxu47rzisEgxWPxBLyY2s'
    },

    params: {
      query: term,
    },
  });


  return responce.data.results;
}


export default searchImages;