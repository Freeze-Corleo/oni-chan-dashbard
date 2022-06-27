import { ActionsUnion, createAction } from '../../../store';
import * as _actions from '../index';
import { IMyProfil } from '../../../appState';

// Define the Actions of notifications to update
// and synchornise the store data
// especially the notifications data
export const Actions = {
  retrieveMyUserVerifyCode: (_user: IMyProfil) => createAction(_actions.HYDRATE_MY_USER_FROM_VERIFY_CODE, _user),
  updateMyUser: (_user: IMyProfil) => createAction(_actions.UPDATE_MY_USER, _user),
  retrieveMyUserFromLoginGoogle: (_user: IMyProfil) => createAction(_actions.HYDRATE_MY_USER_FROM_GOOGLE, _user),
  retrieveMyUserFromLogin: (_user: IMyProfil) => createAction(_actions.HYDRATE_MY_USER_FROM_LOGIN, _user),
  logoutCurrentUser: (_user: IMyProfil) => createAction(_actions.LOGOUT_USER, _user),

};

export type Actions = ActionsUnion<typeof Actions>;