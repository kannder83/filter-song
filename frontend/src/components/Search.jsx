import React, { useState, useRef } from "react";
import { get } from "../api";

import { Errors } from "./Errors";

const Search = ({ setSongs }) => {
  const search = useRef();

  const [errors, setErrors] = useState({
    isErrors: false,
    errors: "",
  });

  const searchBy = (event) => {
    event.preventDefault();
    get(`/title/${search.current.value}`)
      .then((result) => {
        setSongs(result);
        setErrors({
          isErrors: false,
          errors: "",
        });
      })
      .catch((err) => {
        setErrors({
          isErrors: true,
          errors: err,
        });
        setSongs([]);
      });
  };

  const searchByArtist = (event) => {
    event.preventDefault();
    get(`/artist/${search.current.value}`)
      .then((result) => {
        setSongs(result);
        setErrors({
          isErrors: false,
          errors: "",
        });
      })
      .catch((err) => {
        setErrors({
          isErrors: true,
          errors: err,
        });
        setSongs([]);
      });
  };

  const searchByGenre = (event) => {
    event.preventDefault();
    get(`/genre/${search.current.value}`)
      .then((result) => {
        setSongs(result);
        setErrors({
          isErrors: false,
          errors: "",
        });
      })
      .catch((err) => {
        setErrors({
          isErrors: true,
          errors: err,
        });
        setSongs([]);
      });
  };

  return (
    <div className="w-full p-2 bg-gray-300 border border-gray-500 rounded-md shadow-md">
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
          onClick={searchByArtist}
          className="px-4 py-2 shadow-md bg-gray-100  hover:bg-gray-200 rounded-xl"
        >
          Artist
        </button>
        <button
          onClick={searchByGenre}
          className="px-4 py-2  shadow-md bg-gray-100 hover:bg-gray-200 rounded-xl"
        >
          Genre
        </button>
      </div>
      <Errors errors={errors} />
    </div>
  );
};

export { Search };
