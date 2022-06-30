import React from 'react';

const DashboardCustomers = (stat: any) => {
  return (
    <div className="grid grid-cols-1 px-20 pt-8">
      <div className="col-span-3">
        <div className="p-8 shadow-lg rounded-lg bg-white">
          <h3 className="font-bold text-2xl pb-4">Revenu ce mois-ci</h3>
          <div className="flex justify-between items-center">
            <p className="font-bold text-4xl">{stat?.stat?.thisMonthPrice} €</p>
    
            {
              stat?.stat?.thisMonthPourcentPrice < 0 ?
              (
                <div className="font-medium bg-[#f5a2a2] rounded-full px-2 text-red-800">
                  {stat?.stat?.thisMonthPourcentPrice} %
                </div>
              ) : (
                <div className="font-medium bg-[#A2F5B5] rounded-full px-2 text-green-800">
                  {stat?.stat?.thisMonthPourcentPrice} %
                </div>
              )
            }

          </div>
        </div>
        <div className="mt-4 p-8 shadow-lg rounded-lg bg-white">
          <h3 className="font-bold text-2xl pb-4">Commande ce mois-ci</h3>
          <div className="flex justify-between items-center">
            <p className="font-bold text-4xl">{stat?.stat?.thisMonthCommandCount}</p>
            
            {
              stat?.stat?.thisMonthPourcentCommand < 0 ?
              (
                <div className="font-medium bg-[#f5a2a2] rounded-full px-2 text-red-800">
                  {stat?.stat?.thisMonthPourcentCommand} %
                </div>
              ) : (
                <div className="font-medium bg-[#A2F5B5] rounded-full px-2 text-green-800">
                  {stat?.stat?.thisMonthPourcentCommand} %
                </div>
              )
            }
         
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardCustomers;
