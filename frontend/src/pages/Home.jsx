import React from "react";
import { Title } from "../components/Title";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="container p-2 rounded-md gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-400/90 shadow-md">
      <div className="w-full p-4 text-center bg-green-200/40 md:col-span-2 lg:col-span-3 rounded-md">
        <Title title="Music Search" />
      </div>
      <section className="w-full p-2 bg-gray-300/30 rounded-md">
        <article className="text-center space-y-2">
          <h2 className=" underline text-xl">Find songs that you likes</h2>
          <p>A big library with more that 1000 songs!</p>
          <Link
            className="w-10/12 mx-auto p-1 flex justify-center items-center bg-gray-200 hover:bg-gray-300 transition-all ease-in-out delay-100 rounded-md"
            to="/find"
          >
            Find your song!
          </Link>
        </article>
      </section>
      <section className="w-full p-2 bg-gray-300/30 rounded-md">
        <article className="text-center space-y-2">
          <h2 className=" underline text-xl">Go to Library</h2>
          <p>A complete list with all songs!</p>
          <Link
            className="w-10/12 mx-auto p-1 flex justify-center items-center bg-gray-200 hover:bg-gray-300 transition-all ease-in-out delay-100 rounded-md"
            to="/library"
          >
            View our library songs!
          </Link>
        </article>
      </section>
      <section className="w-full p-2 bg-gray-300/30 rounded-md">
        <article className="text-center space-y-2">
          <h2 className=" underline text-xl">About me</h2>
          <p>Information about the project</p>
          <Link
            className="w-10/12 mx-auto p-1 flex justify-center items-center bg-gray-200 hover:bg-gray-300 transition-all ease-in-out delay-100 rounded-md"
            to="/about"
          >
            Go About
          </Link>
        </article>
      </section>
    </div>
  );
};

export { Home };
