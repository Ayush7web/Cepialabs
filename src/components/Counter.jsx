import React from 'react'
import {useState} from 'react'

const Counter = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
   
    setCount(count + 1);
  };




  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold text-gray-800 items-center relative top-56">
          Click the button to increase the counter
        </h1>
      </div>
      <div className=" flex justify-center items-center h-screen">
        <button
          className="font-bold text-blue-600 text-4xl bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          onClick={handleClick}
        >
          Counter: {count}
        </button>
      </div>
    </>
  );
}

export default Counter