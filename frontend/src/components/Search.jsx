import React, { useState, useRef } from "react";
import { get } from "../api";
import { Errors } from "./Errors";
import { IndexPage } from "./IndexPage";

const Search = ({ setSongs }) => {
  const search = useRef();

  const [errors, setErrors] = useState({
    isErrors: false,
    errors: "",
  });

  const searchBy = (event) => {
    event.preventDefault();
    if (event.target.value === undefined) {
      URL = `/title/${search.current.value}`;
    } else if (event.target.value === "artist") {
      URL = `/artist/${search.current.value}`;
    } else {
      URL = `/genre/${search.current.value}`;
    }
    get(URL)
      .then((result) => {
        setSongs(result);
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
      <form onSubmit={searchBy}>
        <input
          className="w-full px-4 py-2 my-2 shadow-md bg-gray-50 border border-gray-100 rounded-xl outline-none"
          type="text"
          name="search"
          placeholder="Search"
          ref={search}
        />
      </form>
      <div className="w-full p-1 flex justify-end space-x-1">
        <button
          onClick={searchBy}
          className="px-4 py-2 shadow-md bg-gray-100  hover:bg-gray-200 rounded-xl"
          value="artist"
        >
          Artist
        </button>
        <button
          onClick={searchBy}
          className="px-4 py-2  shadow-md bg-gray-100 hover:bg-gray-200 rounded-xl"
          value="genre"
        >
          Genre
        </button>
      </div>
      <Errors errors={errors} />
    </div>
  );
};

export { Search };
