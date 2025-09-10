import { useState } from "react";
import { sculptureList } from "../../src/data";


function Description() {
  const [index, setIndex] = useState(0);
  // const [showMore, setShowMore] = useState(false);
  const [imageDescription, setImageDescription] = useState(false);
  
  function handleClick() {
    setIndex((index + 1) % sculptureList.length);
    setImageDescription(false);
  } 
  let sculpture = sculptureList[index];

  // function handleMoreClick() {
  //   setShowMore(!showMore); 
  // } 


  function handleImageDescription() {
    setImageDescription(!imageDescription);
  }
  
  return (
    <>
      <button onClick={handleClick} className="bg-blue-700 text-2xl text-white p-2 ml-3 mt-7 font-semibold rounded-xl">next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <div className="font-semibold"> if you Click! on image , you find the description of the image
        <img
          src={sculpture.url}
          alt={sculpture.alt}
          onClick={handleImageDescription}
        />
      </div>

      {imageDescription && <p>{sculpture.description}</p>}
      <br></br> 

   
    </>
  );
}



export default Description;
