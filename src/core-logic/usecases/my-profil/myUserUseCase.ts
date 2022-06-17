import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';

import { IMyProfil } from '../../../appState';

// TODO: Implementer le gateway auth dedans pour les logins et les verify-code-login comme
// TODO: ca on pourra call directement call les actions.
// Action for notification displaying
export const retrieveMyUserFromLogin = (_user: IMyProfil): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  dispatch(actionCreator.Actions.retrieveMyUserFromLogin(_user));
}

export const retrieveMyUserFromLoginGoogle = (_user: IMyProfil): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  dispatch(actionCreator.Actions.retrieveMyUserFromLoginGoogle(_user));
}

export const retrieveMyUserVerifyCode = (_user: IMyProfil): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  dispatch(actionCreator.Actions.retrieveMyUserVerifyCode(_user));
}

// Action for notification removal
export const updateMyUser =  (_user: IMyProfil): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  dispatch(actionCreator.Actions.updateMyUser(_user));
}

