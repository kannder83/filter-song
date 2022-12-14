import React from "react";

const About = () => {
  return (
    <section className="container md:max-w-screen-md p-4 text-center rounded-md gap-2 flex flex-col justify-center items-center bg-violet-200/50 shadow-md">
      <p className="text-3xl underline">Hi, My name is Alejandro</p>
      <div className="p-2 bg-gray-200/80 rounded-md shadow-md">
        <p className="text-xl text-gray-500">
          I am an electronic engineer, I have knowledge in web technologies
          (HTML, CSS and JS). I use web frameworks like React and Tailwind for
          CSS. At Backend level I work with NodeJS and Python. For databases I
          have done projects using MongoDB and Postgres.
        </p>
        <div className="flex flex-col justify-center items-center space-y-2">
          <a
            className="px-4 py-2 rounded-md bg-gray-400 hover:text-white  hover:shadow-md"
            href="https://www.linkedin.com/in/alejandroruizm/"
          >
            Linkedin
          </a>
          <a
            className="px-4 py-2 rounded-md bg-gray-400 hover:text-white  hover:shadow-md"
            href="https://github.com/kannder83/filter-song"
          >
            Github
          </a>
          <a
            className="px-4 py-2 rounded-md bg-gray-400 hover:text-white  hover:shadow-md"
            href="https://kannder83.com/api/filter-song"
          >
            API Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export { About };
