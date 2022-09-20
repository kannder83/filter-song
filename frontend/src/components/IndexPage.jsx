import React, { useState } from "react";
import { useEffect } from "react";


const IndexPage = ({ pageIndex, getAllSongs }) => {
  const [count, setCount] = useState(0);
  const [countPages, setCountPages] = useState(1);


  const increment = () => {
    if (count < pageIndex.pages) {
      setCount(count + 10);
      setCountPages(countPages + 1)
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 10);
      setCountPages(countPages - 1)
    }
  };


  useEffect(() => {
    getAllSongs(count);
  }, [count]);

  return (
    <div className="w-full">
      <div className="w-full flex justify-around">
        <button
          onClick={decrement}
          className="w-3/12 px-2 py-1 bg-gray-50 rounded-md hover:bg-gray-200/80 transition-all duration-200 ease-in-out"
        >
          Previous
        </button>
        <p className="w-3/12 text-center px-2 py-1 bg-gray-300 rounded-md">
          Pages: {countPages} of {pageIndex.pages}
        </p>
        <button
          onClick={increment}
          className="w-3/12 px-2 py-1 bg-gray-50 rounded-md hover:bg-gray-200/80 transition-all duration-200 ease-in-out"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { IndexPage };
