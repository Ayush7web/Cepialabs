import React from 'react'
// import { useState } from 'react';


const OutputBox = (props) => {
  return (
    <div>
      <p className="text-center text-lg font-medium text-gray-700 justify-center flex ">
        {props.submitText}
      </p>
    </div>
  );
}

export default OutputBox