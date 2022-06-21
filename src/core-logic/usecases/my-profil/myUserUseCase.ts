import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';
import * as notificationActionCreator from '../notifications/actionCreator';

import { IMyProfil, IUserLogin } from '../../../appState';

import { IAuthenticationGateway } from '../../gateways/authenticationGateway';

/**
 * Will implement user data in myProfil reducer if login succeed
 * @param {email: string, password: string}_credentials datas for login
 * @returns {void}
 */
export const retrieveMyUserFromLogin = (_credentials: IUserLogin): ThunkResult<Promise<void>> => async (dispatch, getState, {authGateway}: {authGateway : IAuthenticationGateway}) => {
  // Login gateway method
  const { error, jwtDecoded} = await authGateway.login(_credentials);
  if(!error && jwtDecoded !== null) {
    console.log(jwtDecoded);
    dispatch(actionCreator.Actions.retrieveMyUserFromLogin(jwtDecoded));
  }
}

/**
 * Will implement user data in myProfil reducer if login succeed after code validation
 * @param {string} _id uuid's user to get the validateCode in User model
 * @param _code code typed in frontend in /verify-code
 * @returns
 */
export const retrieveMyUserFromVerifyCode = (_id: string, _code: string): ThunkResult<Promise<void>> => async (dispatch, getState, {authGateway}: {authGateway : IAuthenticationGateway}) => {
  // Login gateway method
  const { error, jwtDecoded} = await authGateway.validateCode(_id, _code);
  if(!error && jwtDecoded !== null) {
    dispatch(actionCreator.Actions.retrieveMyUserFromLogin(jwtDecoded));
  }
}

// Action for notification removal
export const updateMyUser =  (_user: IMyProfil): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  dispatch(actionCreator.Actions.updateMyUser(_user));
}

