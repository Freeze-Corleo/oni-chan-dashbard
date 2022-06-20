import React from 'react';

const mock = [{}];

/**
 * Implement dashboard element that display
 * command history by days, months, years
 * @returns {JSX.Element}
 */
const DashboardHistoryCommands = () => {
  const [displayData, setDisplayData] = React.useState<{} | null>(null);

  return (
    <div className="grid grid-cols-12 px-20 mt-8">
      <div className="col-span-12 bg-white shadow-lg">
        <div>
          <h2 className="font-medium px-8 py-4 text-lg">
            Historique des commandes
          </h2>
          <div className="">filtering bar</div>
        </div>
        <div>
          <table>
            <
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHistoryCommands;
