import React, { useState, useEffect } from "react";
import { get } from "../api";

const Playlist = () => {
  const [count, setCount] = useState(0);
  const [pageIndex, setPageIndex] = useState({});

  const increment = () => {
    setCount(count + 10);
    console.log("setcount: ", count);
    getAllSongs(count);
  };

  const suma = () => {
    if (count < pageIndex.pages) {
      setCount(count + 10);
    }
  };

  const resta = () => {
    if (count > 0) {
      setCount(count - 10);
    }
  };

  const getAllSongs = (skip = 0, limit = 10) => {
    get(`/songs?skip=${skip}&limit=${limit}`)
      .then((result) => {
        setPageIndex({
          rows: result.rows,
          pages: result.pages,
          rows_per_page: result.rows_per_page,
          initial_id: result.initial_id,
          last_id: result.last_id,
          data: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllSongs(count);
  }, [count]);

  return (
    <div className="flex flex-col justify-center  items-center space-y-2">
      <div className="p-2 bg-gray-200 text-center rounded-md">
        <p>rows: {pageIndex.rows}</p>
        <p>pages: {pageIndex.pages}</p>
        <p>rows_per_page: {pageIndex.rows_per_page}</p>
        <p>initial_id: {pageIndex.initial_id}</p>
        <p>last_id: {pageIndex.last_id}</p>
        <p>count: {count}</p>
      </div>
      <button className="p-2 rounded-md bg-red-200" onClick={suma}>
        Incrementa
      </button>
      <button className="p-2 rounded-md bg-red-200" onClick={resta}>
        Decrementa
      </button>
      <div className="p-2 bg-gray-600 text-center text-white rounded-md">
        <ul>
          {pageIndex?.data?.map((song) => {
            return <li key={song.id}>{song.id}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export { Playlist };
