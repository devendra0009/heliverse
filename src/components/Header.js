import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=" border-b-2 ">
      <div className=" mx-8  md:mx-auto md:px-5 flex justify-between items-center text-white mt-5 mb-10 md:max-w-[900px]">
        <Link to="/">
          <strong className="text-2xl uppercase">Heliverse</strong>
        </Link>

        <Link to="/team">
          <span className="bg-blue-500 px-4 py-2 rounded-md max-w-[40%]">
            Your Team
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
