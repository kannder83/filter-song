import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-full p-1 flex justify-center bg-gray-700 text-white">
      <ul className="w-full flex justify-end items-center space-x-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/find">Search</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
