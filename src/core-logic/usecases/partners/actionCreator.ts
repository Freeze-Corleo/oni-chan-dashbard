import { ActionsUnion, createAction } from '../../../store';
import * as _actions from '../index';
import { IPartner } from '../../../appState';

// Define the Actions of partners to update
// and synchornise the store data
// especially the partners data
export const Actions = {
  retrievePartners: () => createAction(_actions.RETRIEVE_PARTNERS),
  partnersRetrieved: (_partners: IPartner[] | null) => createAction(_actions.PARTNERS_RETRIEVED, _partners)
};

export type Actions = ActionsUnion<typeof Actions>;