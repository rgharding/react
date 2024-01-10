import { useState } from "react";
import AnimalShow from "./AnimalShow";

function App() {

  const [ count, setCount ] = useState(0);

  const handleClick = ((event) => {
    event.preventDefault();
    setCount(count + 1);
  });

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      Count: {count}
    </div>
  )
};




export default App;