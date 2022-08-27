import React, { useState, useEffect } from "react";
import { get } from "../api";
import { SimpleSong } from "../components/SimpleSong";
import { Title } from "../components/Title";
import { Errors } from "../components/Errors";

const Library = () => {
  const [errors, setErrors] = useState({
    isErrors: false,
    errors: "",
  });

  const [songs, setSongs] = useState([]);

  const getAllSongs = () => {
    get("/songs")
      .then((result) => {
        setSongs(result);
        setErrors({
          isErrors: false,
          errors: "",
        });
      })
      .catch((err) => {
        console.log("error");
        setErrors({
          isErrors: true,
          errors: err.error,
        });
      });
  };

  useEffect(() => {
    getAllSongs();
  }, []);

  return (
    <div className="container p-4 rounded-md gap-2 flex flex-col justify-center items-center bg-slate-500 shadow-md">
      <Title title="Library" />
      <div className="w-full">
        <SimpleSong songs={songs} />
      </div>
      <Errors errors={errors} />
    </div>
  );
};

export { Library };
