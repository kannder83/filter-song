import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../api";
import { Errors } from "../components/Errors";
import { Title } from "../components/Title";

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
    <div className="container p-2 rounded-md gap-2 flex flex-col justify-center items-center bg-slate-400/90 shadow-md">
      <Title title="Detail Song" />
      {!errors.isErrors && (
        <table className="w-10/12">
          <tbody>
            {Object.entries(songs).map(([key, value]) => {
              return (
                <tr key={key} className="my-1 border-b-2 border-gray-300/50">
                  <td>{key}: </td>
                  <td>{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <Link
        className="w-1/12 px-2 py-1 text-center bg-gray-500 hover:bg-gray-600 transition-all delay-75 rounded-md"
        to="/find"
      >
        Back
      </Link>
      <Errors errors={errors} />
    </div>
  );
};

export { DetailSong };
