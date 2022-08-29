import React, { useState } from "react";
import { Search } from "../components/Search";
import { Title } from "../components/Title";
import { SimpleSong } from "../components/SimpleSong";

const Find = () => {
  const [songs, setSongs] = useState([]);

  return (
    <div className="container md:max-w-screen-md p-4 rounded-md gap-2 flex flex-col justify-center items-center bg-yellow-300/40 shadow-md">
      <Title title="Search your song!" />
      <Search setSongs={setSongs} />
      {!songs.length == 0 && <SimpleSong songs={songs} />}
    </div>
  );
};

export { Find };
