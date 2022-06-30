import { ActionsUnion, createAction } from '../../../store';
import * as _actions from '../index';
import { ICommand } from '../../../appState';

// Define the Actions of partners to update
// and synchornise the store data
// especially the partners data
export const Actions = {
  createCommand: () => createAction(_actions.CREATE_COMMAND),
  commandCreated: (commandCreated: ICommand) => createAction(_actions.COMMAND_CREATED, commandCreated)
};

export type Actions = ActionsUnion<typeof Actions>;