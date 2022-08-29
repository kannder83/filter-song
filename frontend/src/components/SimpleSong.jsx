import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SimpleSong = ({ songs }) => {
  return (
    <div className="w-full mt-1 p-2 flex flex-col justify-center items-center bg-slate-300 rounded-md shadow-md">
      <table className="w-full text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => {
            return (
              <tr
                key={song.id}
                className="border-b-2 border-gray-700/20 hover:border-gray-700/90 transition-all duration-150 ease-in-out"
              >
                <td>
                  <Link to={`/library/${song.id}`}>{song.id}</Link>
                </td>
                <td>
                  <Link to={`/library/${song.id}`}>{song.song}</Link>
                </td>
                <td>
                  <Link to={`/library/${song.id}`}>{song.artist}</Link>
                </td>
                <td>
                  <Link to={`/library/${song.id}`}>{song.year}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { SimpleSong };
