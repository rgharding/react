import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";




function getRandomAnimal() {
  let animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}


function App() {
 
  const [ animals, setAnimals ] = useState([]);
  

  const handleClick = ((event) => {
    event.preventDefault();
    setAnimals([...animals, getRandomAnimal()]);
  });


  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}/>
  });
  

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  )
};




export default App;