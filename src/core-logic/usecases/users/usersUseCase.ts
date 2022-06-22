import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';

import { IUserGateway } from '../../gateways/userGateway';

import { IUser } from '../../../appState';

import { displayToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';



// Action for notification displaying
export const retrieveSpecificUser = (_uuid: string): ThunkResult<Promise<void>> => async (dispatch, getState, {userGateway}: {userGateway: IUserGateway}) => {
  dispatch(actionCreator.Actions.retrieveSpecificUser);
  const user = await (await userGateway.getUserById(_uuid)).response.data;
  dispatch(actionCreator.Actions.specificUserRetrieved(user.user));
}

export const updateSpecificUser = (_uuid: string, _userModified: IUser): ThunkResult<Promise<void>> => async (dispatch, getState, {userGateway}: {userGateway: IUserGateway}) => {
  dispatch(actionCreator.Actions.updateSpecificUser);
  const {response, error} = await (await userGateway.updateUser(_uuid, _userModified));
  if(!error) {
    dispatch(actionCreator.Actions.specificUserUpdated(response.data));
    dispatch(
      displayToastNotification({
        text: 'Vos données ont été modifiées avec succès',
        severityLevel: 'success',
        severityTitle: 'Modification faites !',
      })
    );
  } else {
    dispatch(
      displayToastNotification({
        text: 'Une erreur est survenue lors de la modification',
        severityLevel: 'error',
        severityTitle: 'Modification non réussie',
      })
    );
  }
}