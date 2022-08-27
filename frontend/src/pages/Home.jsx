import React from "react";
import { Title } from "../components/Title";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="container p-2 rounded-md gap-2 flex flex-col justify-center items-center bg-slate-400/90 shadow-md">
      <Title title="Music Search" />
      <section>
        <article>
          <p>Find songs that you likes</p>
          <p>A big library with more that 1000 songs!</p>
        </article>
        <div>
          <Link
            className="w-full p-2 flex justify-center items-center bg-gray-200 hover:bg-gray-300 transition-all ease-in-out delay-100 rounded-md"
            to="/find"
          >
            Find your song!
          </Link>
        </div>
      </section>
    </div>
  );
};

export { Home };
