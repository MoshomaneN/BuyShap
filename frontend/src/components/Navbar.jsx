import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-green-600">
        BuyShap
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
        <Link to="/compare" className="text-gray-700 hover:text-green-600">Compare</Link>
        <Link to="/login" className="text-gray-700 hover:text-green-600">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

