import { ActionsUnion, createAction } from '../../../store';
import * as _actions from '../index';
import { IUser } from '../../../appState';

// Define the Actions of notifications to update
// and synchornise the store data
// especially the notifications data
export const Actions = {
  retrieveSpecificUser: () => createAction(_actions.RETRIEVE_SPECIFIC_USER),
  specificUserRetrieved: (_user: IUser) => createAction(_actions.SPECIFIC_USER_RETRIEVED, _user),
  updateSpecificUser: () => createAction(_actions.UPDATE_SPECIFIC_USER),
  specificUserUpdated: (_user: IUser) => createAction(_actions.SPECIFIC_USER_UPDATED, _user)
};

export type Actions = ActionsUnion<typeof Actions>;