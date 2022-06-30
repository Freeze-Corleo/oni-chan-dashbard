import React from 'react';

import AdminHomeRoot from '../../../components/organisms/AdminHomeRoot';
import CommandCard from '../../../components/molecules/commands/commandCard';

import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import { selectMyProfilReducer } from '../../../view-model-generation/generateMyProfilModel';
import { selectCommandReducer } from '../../../view-model-generation/generateCommandModel';
import { retrieveCommandsFromRestorer } from '../../../core-logic/usecases/command/commandUseCase';
import { retrieveMyUserFromCookie } from '../../../core-logic/usecases/my-profil/myUserUseCase';

const CommandsDetailsByRestaurant = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const cookie: any = useCookies(['FREEZE_JWT']);
  const user = useSelector(selectMyProfilReducer);
  const commands = useSelector(selectCommandReducer);

  React.useEffect(() => {
    params.id && dispatch(retrieveCommandsFromRestorer(params?.id));
  }, []);

  React.useEffect(() => {
    dispatch(retrieveMyUserFromCookie(cookie[0].FREEZE_JWT));
  }, []);

  return (
    <AdminHomeRoot>
      <div className="col-span-12 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-2">
          <h2 className="px-8 py-4 text-lg font-medium">
            Mes commandes par restaurant
          </h2>
        </div>
      </div>
      {user.data && (
        <div className="grid grid-cols-4 px-8 pt-8 overflow-y-auto text-xs">
          {commands?.map((command) => {
            return <CommandCard command={command} userId={user.data.uuid} />;
          })}
        </div>
      )}
    </AdminHomeRoot>
  );
};

export default CommandsDetailsByRestaurant;
