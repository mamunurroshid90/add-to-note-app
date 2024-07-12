import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className=" bg-black flex justify-between items-center px-8 py-3">
        <div>
          <Link to="/" className=" text-white font-mono text-xl font-semibold">
            Logo
          </Link>
        </div>
        <div className=" flex items-center gap-4">
          <Link to="/" className=" text-white font-mono text-xl font-semibold">
            Home
          </Link>
          <Link
            to="/notes"
            className=" text-white font-mono text-xl font-semibold"
          >
            Notes
          </Link>
          <Link
            to="/contact"
            className=" text-white font-mono text-xl font-semibold"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
