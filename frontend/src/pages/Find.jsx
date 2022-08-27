import React, { useState } from "react";
import { Search } from "../components/Search";
import { Title } from "../components/Title";
import { SimpleSong } from "../components/SimpleSong";

const Find = () => {
  const [songs, setSongs] = useState([]);
  // const [notFoundSong, setNotFoundSong] = useState(false);

  return (
    <div className="container p-4 rounded-md gap-2 flex flex-col justify-center items-center bg-slate-500 shadow-md">
      <Title title="Search your song!" />
      <Search setSongs={setSongs} />
      {songs && <SimpleSong songs={songs} />}
    </div>
  );
};

export { Find };
