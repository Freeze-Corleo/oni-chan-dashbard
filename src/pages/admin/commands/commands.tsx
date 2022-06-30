import React from 'react';

import AdminHomeRoot from '../../../components/organisms/AdminHomeRoot';
import CommandCard from '../../../components/molecules/commands/commandCard';

import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { selectCommandReducer } from '../../../view-model-generation/generateCommandModel';
import { retrieveCommandsFromRestorer } from '../../../core-logic/usecases/command/commandUseCase';

const CommandsDetailsByRestaurant = () => {
  const commands = useSelector(selectCommandReducer);
  const params = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    params.id && dispatch(retrieveCommandsFromRestorer(params?.id));
  }, []);

  console.log(commands);
  return (
    <AdminHomeRoot>
      <div className="col-span-12 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-2">
          <h2 className="px-8 py-4 text-lg font-medium">
            Mes commandes par restaurant
          </h2>
        </div>
        <div className="px-8">
          {commands?.map((command) => {
            return <CommandCard command={command} />;
          })}
        </div>
      </div>
    </AdminHomeRoot>
  );
};

export default CommandsDetailsByRestaurant;
