import React, { useState, useEffect, useReducer } from "react";
import { get } from "../api";
import { SimpleSong } from "../components/SimpleSong";
import { Title } from "../components/Title";
import { Errors } from "../components/Errors";
import { IndexPage } from "../components/IndexPage";

const Library = () => {
  const [errors, setErrors] = useState({
    isErrors: false,
    errors: "",
  });

  const [pageIndex, setPageIndex] = useState({
    rows: 0,
    pages: 0,
    rows_per_page: 0,
    initial_id: 0,
    last_id: 0,
  });

  const [song, setSong] = useState([]);

  const getAllSongs = (skip = 0, limit = 10) => {
    get(`/songs?skip=${skip}&limit=${limit}`)
      .then((result) => {
        setPageIndex({
          rows: result.rows,
          pages: result.pages,
          rows_per_page: result.rows_per_page,
          initial_id: result.initial_id,
          last_id: result.last_id,
        });
        setSong(result.data);
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
      });
  };

  useEffect(() => {
    getAllSongs();
  }, []);

  return (
    <div className="container md:max-w-screen-md p-4 rounded-md gap-2 flex flex-col justify-center items-center bg-blue-400/60 shadow-md">
      {!errors.isErrors && (
        <>
          <Title title="Library" />
          <div className="w-full">
            <SimpleSong songs={song} pageIndex={pageIndex} />
          </div>
          <IndexPage pageIndex={pageIndex} getAllSongs={getAllSongs} />
        </>
      )}

      <Errors errors={errors} />
    </div>
  );
};

export { Library };
