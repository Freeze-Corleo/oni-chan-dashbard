import React from 'react';

const DashboardCustomers = () => {
  return (
    <div className="grid grid-cols-12 px-20 pt-8">
      <div className="col-span-3">
        <div className="p-8 shadow-lg rounded-lg bg-white">
          <h3 className="font-bold text-2xl pb-4">Nouveaux clients</h3>
          <div className="flex justify-between items-center">
            <p className="font-bold text-4xl">54</p>
            <div className="font-medium bg-[#A2F5B5] rounded-full px-2 text-green-800">
              +16.7 %
            </div>
          </div>
        </div>
        <div className="mt-4 p-8 shadow-lg rounded-lg bg-white">
          <h3 className="font-bold text-2xl pb-4">Commandes ratées</h3>
          <div className="flex justify-between items-center">
            <p className="font-bold text-4xl">2</p>
            <div className="font-medium bg-[#f5a2a2] rounded-full px-2 text-red-800">
              -2.30 %
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-9 shadow-lg ml-8 p-8 bg-white">
        graphique sa mère
      </div>
    </div>
  );
};

export default DashboardCustomers;
