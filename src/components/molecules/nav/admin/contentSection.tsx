import React from 'react';
import { Link } from 'react-router-dom';

const ContentNavigation = () => {
  return (
    <div className="pb-8">
      <h3 className="px-2 pb-4 text-sm font-medium tracking-wider uppercase opacity-50 text-white-grayish">
        Contenu
      </h3>
      <div className="flex items-center px-2 py-2 mb-2 transition duration-200 rounded-lg cursor-pointer hover:bg-dark-hover text-white-grayish hover:text-white linear">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
        <Link to="/admin/create-restaurant">
          <h3 className="pl-3 text-sm tracking-wide">Mes restaurants</h3>
        </Link>
      </div>
      <div className="flex items-center px-2 py-2 mb-2 transition duration-200 rounded-lg cursor-pointer hover:bg-dark-hover text-white-grayish hover:text-white linear">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
        <Link to="/admin/create-product">
          <h3 className="pl-3 text-sm tracking-wide">Produits</h3>
        </Link>
      </div>
    </div>
  );
};

export default ContentNavigation;
