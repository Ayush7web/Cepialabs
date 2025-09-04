import { useState } from "react";
import { sculptureList } from "./data";


function Appu() {

  let [index, setIndex] = useState(0);
  

  function handleClick() {
    setIndex(index + 1);
  }


  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handleClick}>next</button>
      
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      
    </div>
  );
}

export default Appu;