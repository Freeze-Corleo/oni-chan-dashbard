import { ActionsUnion, createAction } from '../../../store';
import * as _actions from '../index';

// Define the Actions of notifications to update
// and synchornise the store data
// especially the notifications data
export const Actions = {
  addToast: (options: {}) => createAction(_actions.ADD_TOAST, options),
  removeToast: (id: string) => createAction(_actions.REMOVE_TOAST, id)
};

export type Actions = ActionsUnion<typeof Actions>;