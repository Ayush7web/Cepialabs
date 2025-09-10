import React from "react";
import OutputBox from "./outputBox";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBox = () => {

  const [text , setText] = useState("");
  const [submitText , setSubmitText] = useState("");

  const inputFunc = (e) => {
   if(e.key === "Enter"){
    setSubmitText(text);
   }
  }



  return (
    <>
      <div className="flex items-center w-full max-w-md mx-auto rounded-2xl shadow-sm bg-white border border-gray-500 px-3 py-2 my-16">
        <Search className="text-gray-400 w-5 h-5 mr-2" />
        <input
          onKeyDown={inputFunc}
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add your Work Guys..."
          className="w-full outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
       <OutputBox props={submitText}/>
    </>
  );
};

export default SearchBox;
