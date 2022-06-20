import React from 'react';

export interface IDashboardCard {
  children?: React.ReactNode;
  displayedData: string;
  title: string;
}

const DashboardCard: React.FC<IDashboardCard> = ({
  children,
  displayedData,
  title,
}) => {
  return (
    <div className="shadow-lg bg-white rounded-lg py-8 px-4 w-[250px] h-[250px] grid place-content-center">
      <div className="pb-4">{children}</div>
      <p className="text-xl font-bold tracking-wide">{displayedData}</p>
      <h3 className="pt-4 font-medium">{title}</h3>
    </div>
  );
};

export default DashboardCard;
