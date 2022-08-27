import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SimpleSong = ({ songs }) => {
  return (
    <div className="w-full mt-1 p-2 flex flex-col justify-center items-center bg-slate-300 rounded-md shadow-md">
      <p>songs here!</p>
      <ul className="w-full">
        {songs.map((song) => {
          return (
            <Link key={song.id} to={`/library/${song.id}`}>
              <li className="w-full p-1 my-1 rounded-md flex justify-center bg-gray-100 hover:bg-gray-100/80 cursor-pointer">
                {song.song} - {song.artist}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export { SimpleSong };
