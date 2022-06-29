import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';

import { IUserGateway } from '../../gateways/userGateway';

import { IUser } from '../../../appState';

import { displayToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';
import { eraseJwtHeader } from '../../../secondary-adapters/helpers/api.helpers';



// Action for notification displaying
export const retrieveSpecificUser = (_uuid: string): ThunkResult<Promise<void>> => async (dispatch, getState, {userGateway}: {userGateway: IUserGateway}) => {
  dispatch(actionCreator.Actions.retrieveSpecificUser);
  const user = await (await userGateway.getUserById(_uuid)).response.data;
  dispatch(actionCreator.Actions.specificUserRetrieved(user.user));
}

export const deleteSpecificUser = (_uuid: string): ThunkResult<Promise<void>> => async (dispatch, getState, {userGateway}: {userGateway: IUserGateway}) => {
  dispatch(actionCreator.Actions.deleteSpecificUser);
  await userGateway.deleteUserById(_uuid);
  dispatch(actionCreator.Actions.specificUserDeleted());

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

export const deleteMyAccount = (_uuid: string): ThunkResult<Promise<void>> => async (dispatch, getState, {userGateway}: {userGateway: IUserGateway}) => {
  dispatch(actionCreator.Actions.specificUserDeleted);
  const {response, error} = await userGateway.deleteUserById(_uuid);
  if(!error) {
    eraseJwtHeader("FREEZE_JWT");
    dispatch(
      displayToastNotification({
        text: 'Votre compte a bien été supprimé',
        severityLevel: 'success',
        severityTitle: 'Suppression faite !',
      })
    );
  } else {
    dispatch(
      displayToastNotification({
        text: 'Une erreur est survenue lors de la suppression',
        severityLevel: 'error',
        severityTitle: 'Supression non réussie',
      })
    );
  }
}