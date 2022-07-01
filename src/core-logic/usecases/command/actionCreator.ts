import { ActionsUnion, createAction } from '../../../store';
import * as _actions from '../index';
import { ICommand } from '../../../appState';

// Define the Actions of partners to update
// and synchornise the store data
// especially the partners data
export const Actions = {
  createCommand: () => createAction(_actions.CREATE_COMMAND),
  commandCreated: (commandCreated: ICommand) => createAction(_actions.COMMAND_CREATED, commandCreated),
  retrieveCommands: () => createAction(_actions.RETRIEVE_COMMANDS),
  commandsRetrieved: (commands: ICommand[] | null) => createAction(_actions.COMMANDS_RETRIEVED, commands),
  retrieveHistoByUser: () => createAction(_actions.RETRIEVE_HISTO_BY_USER),
  histoByUserRetrieved: (commands: ICommand[] | null) => createAction(_actions.HISTO_BY_USER_RETRIEVED, commands),

  retrieveCommandsFromRestaurant: () => createAction(_actions.RETRIEVE_COMMANDS_FROM_RESTO),
  commandsFromRestaurantsRetrieved: (_commands: ICommand[]) => createAction(_actions.COMMANDS_FROM_RESTO_RETRIEVED, _commands),
  deleteSpecificCommand: (_id: string) => createAction(_actions.DELETE_COMMAND, _id),
  updateCommand: () => createAction(_actions.UPDATE_COMMAND),
  commandUpdated: (command: ICommand) => createAction(_actions.COMMAND_UPDATED, command)
};

export type Actions = ActionsUnion<typeof Actions>;