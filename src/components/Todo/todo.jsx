import React from 'react'
import SearchBox from '../../pages/searchBox'
import Button from '../../pages/button'



const todo = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto gap-3">
      <SearchBox />
      <Button />
    
    </div>
  );
}

export default todo