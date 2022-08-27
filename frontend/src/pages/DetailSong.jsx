import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../api";
import { Errors } from "../components/Errors";

const DetailSong = () => {
  const { songId } = useParams();

  const [songs, setSongs] = useState([]);

  const [errors, setErrors] = useState({
    isErrors: false,
    errors: "",
  });

  const searchById = () => {
    get(`/songs/${songId}`)
      .then((result) => {
        setSongs(result);
        setErrors({
          isErrors: false,
          errors: "",
        });
      })
      .catch((err) => {
        let error = "";

        err[0].msg ? (error = err[0].msg) : (error = err);

        setErrors({
          isErrors: true,
          errors: error,
        });
        setSongs([]);
      });
  };

  useEffect(() => {
    searchById();
  }, []);

  return (
    <div>
      {!errors.isErrors && (
        <article>
          <h2>Title: {songs.song}</h2>
          <p>Artist: {songs.artist}</p>
          <p>Year: {songs.year}</p>
          <p>Duration: {songs.duration_ms}</p>
          <p>Popularity: {songs.popularity}</p>
          <p>Danceability: {songs.danceability}</p>
          <Link className="w-full px-2 py-1 bg-slate-500 rounded-md" to="/find">
            Back
          </Link>
        </article>
      )}

      <Errors errors={errors} />
    </div>
  );
};

export { DetailSong };
