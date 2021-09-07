import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-yellow-400 h-16 justify-center items-center">
      <ul className="flex">
        <h3>
          <Link
            to="/"
            className="hover:bg-purple-600 h-16 rounded-md p-4 ml-4 hover:text-gray-50"
          >
            Pokedex
          </Link>
        </h3>

        <li>
          <Link
            to="/collected/"
            className="hover:bg-purple-600 h-16 rounded-md p-4 ml-4 hover:text-gray-50"
          >
            Collected
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
