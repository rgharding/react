import { useState } from 'react';
import AnimalShow from './AnimalShow';


let animalSelection = ['bird', 'cat', 'cow', ];

const getAnimal = () => {
  let randomNumber = Math.round(Math.random() * (animalSelection.length - 1));
  return animalSelection[randomNumber];
}




function App() {

const [ animals, setAnimal ] = useState([]);

const handleClick = () => {
  setAnimal( [...animals, getAnimal()]);
}


const renderedAnimals = animals.map((animal, index) => {
  return <AnimalShow type={animal} key={index}/>
})

  return (
    <div>
      <button  onClick={handleClick}>
        Add Animal
      </button>

      <div>
        {renderedAnimals}
      </div>
      
    </div>
  );
}


export default App;