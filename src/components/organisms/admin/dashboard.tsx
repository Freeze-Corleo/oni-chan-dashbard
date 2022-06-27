import React from 'react';
import { useNavigate } from 'react-router-dom';

import Table from '../../atoms/Table';

const mock = [
  {
    label: 'Cyber',
    createdAt: '01/02/3222',
    status: 'active',
    _id: '17',
    yolo: 'hannn',
  },
  {
    label: 'Cyber',
    createdAt: '01/02/3222',
    status: 'active',
    _id: '12',
    yolo: 'hannn',
  },
  {
    label: 'Cyber',
    createdAt: '01/02/3222',
    status: 'active',
    _id: '123',
    yolo: 'hannn',
  },
  {
    label: 'Cyber',
    createdAt: '01/02/3222',
    status: 'active',
    _id: '1234',
    yolo: 'hannn',
  },
];

/**
 * Implement dashboard element that display
 * command history by days, months, years
 * @returns {JSX.Element}
 */
const DashboardHistoryCommands = () => {
  const [displayData, setDisplayData] = React.useState<{} | null>(null);
  const [selected, setSelected] = React.useState<string[]>([]);

  const navigate = useNavigate();

  const redirection = (id: string) => {
    navigate('/admin/commands/' + id);
  };

  return (
    <div className="grid grid-cols-12 px-20 mt-8">
      <div className="col-span-12 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="px-8 py-4 text-lg font-medium">Dernières commandes</h2>
        </div>
        <div className="px-8">
          <Table
            rowLabels={['Libellé', 'Date de Création', 'Status', 'Hannn']}
            datas={mock}
            redirection={redirection}
            setSelected={setSelected}
            selected={selected}
            showSelects={false}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHistoryCommands;
