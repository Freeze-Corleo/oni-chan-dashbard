import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { selectPartnerWithoutAddr } from '../../../view-model-generation/generatePartnerModel';
import { retrievePartners } from '../../../core-logic/usecases/partners/partnersUseCase';

import Table from '../../atoms/Table';

const mock = [
  {
    label: 'Cyber',
    createdAt: '01/02/3222',
    status: 'active',
    id: '17',
    yolo: 'hannn',
  },
  {
    label: 'Cyber',
    createdAt: '01/02/3222',
    status: 'active',
    id: '12',
    yolo: 'hannn',
  },
  {
    label: 'Cyber',
    createdAt: '01/02/3222',
    status: 'active',
    id: '123',
    yolo: 'hannn',
  },
  {
    label: 'Cyber',
    createdAt: '01/02/3222',
    status: 'active',
    id: '1234',
    yolo: 'hannn',
  },
];

/**
 * Implement dashboard element that display
 * command history by days, months, years
 * @returns {JSX.Element}
 */
const DashboardPartners = () => {
  const [isValidation, setIsValidation] = React.useState<boolean>(true);
  const partners = useSelector(selectPartnerWithoutAddr);
  const dispatch = useDispatch();
  const [displayData, setDisplayData] = React.useState<{} | null>(null);
  const [selected, setSelected] = React.useState<string[]>([]);

  const navigate = useNavigate();

  const validation = (state: string, id: string) => {
    console.log(state, id);
  };

  React.useEffect(() => {
    dispatch(retrievePartners());
  }, []);

  return (
    <div className="grid grid-cols-12 px-20 pt-8">
      <div className="col-span-12 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="px-8 py-4 text-lg font-medium">
            Les candidatures de partenaires
          </h2>
        </div>
        <div className="px-8">
          {partners && (
            <Table
              rowLabels={[
                'Nom',
                'SIREN',
                'Activité',
                'Prénom',
                'Nom de famille',
                'Email',
                'Téléphone',
                'Status',
                'Date de création',
              ]}
              datas={partners}
              setSelected={setSelected}
              selected={selected}
              showSelects={false}
              isValidation={isValidation}
              validation={validation}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPartners;
