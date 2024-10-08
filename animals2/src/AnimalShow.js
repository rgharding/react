import { useState } from 'react';
import  './AnimalShow.css';

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';


function AnimalShow(props) {

  const { type }  = props;

  const [ clicks, setClicks ] = useState(0);

  let image = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
    heart,
  }

  const handleClick = () => {
    setClicks(clicks + 1)
  };


  return (
    
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' src={image[type]} alt='animal' />
      <img className='heart' src={image.heart} 
      alt='heart' 
      style={{ width: 10 + clicks * 10 + 'px' }}
      />

    
    </div>

  );
}


export default AnimalShow;