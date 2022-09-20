import React, { useState, useRef } from "react";
import { get } from "../api";
import { Errors } from "./Errors";
import { InputRadio } from "./InputRadio";


const Search = ({ setSongs }) => {
  const search = useRef();
  const [searchOption, setSearchOption] = useState("title")

  const [errors, setErrors] = useState({
    isErrors: false,
    errors: "",
  });

  const searchBy = (event) => {
    event.preventDefault();



    if (searchOption === "title") {
      URL = `/title/${search.current.value}`;
    } else if (searchOption === "artist") {
      URL = `/artist/${search.current.value}`;
    } else {
      URL = `/genre/${search.current.value}`;
    }
    get(URL)
      .then((result) => {
        setSongs(result["data"]);
        setErrors({
          isErrors: false,
          errors: "",
        });
      })
      .catch((err) => {
        if (err !== undefined) {
          err = "Not Found";
        }
        setErrors({
          isErrors: true,
          errors: err,
        });
        setSongs([]);
      });
  };

  return (
    <div className="w-full p-2 bg-gray-300 border rounded-md shadow-md">
      <form onSubmit={searchBy} className="w-full flex space-x-2">
        <input
          className="w-full px-4 py-2 shadow-md bg-gray-50 border border-gray-100 rounded-xl outline-none"
          type="text"
          name="search"
          placeholder="Search"
          ref={search}
        />
        <button className="px-4 py-2 rounded-xl bg-amber-200 shadow-md hover:bg-amber-300/60 transition-all delay-750">Search</button>
      </form>
      <div className="w-full mt-2 p-1 flex justify-end space-x-1">
        <InputRadio searchOption={searchOption} setSearchOption={setSearchOption} />
      </div>
      <Errors errors={errors} />
    </div>
  );
};

export { Search };
