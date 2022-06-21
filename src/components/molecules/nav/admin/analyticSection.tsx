import React from 'react';

const AnalyticsNavigation = () => {
  return (
    <div className="pb-8">
      <h3 className="px-2 pb-4 text-sm font-medium tracking-wider uppercase opacity-50 text-white-grayish">
        Analytique
      </h3>
      <div className="flex items-center px-2 py-2 mb-2 transition duration-200 rounded-lg cursor-pointer hover:bg-dark-hover text-white-grayish hover:text-white linear">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
        <h3 className="pl-3 text-sm tracking-wide">Dashboard</h3>
      </div>
      <div className="flex items-center px-2 py-2 transition duration-200 rounded-lg cursor-pointer hover:bg-dark-hover text-white-grayish hover:text-white linear">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        <h3 className="pl-3 text-sm tracking-wide">Historique</h3>
      </div>
    </div>
  );
};

export default AnalyticsNavigation;
