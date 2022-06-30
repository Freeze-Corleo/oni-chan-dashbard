import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';

import { ICommandCreate } from '../../../appState';

import { ICommandGateway } from '../../gateways/commandGateway';
import { CommandGateway } from '../../../secondary-adapters/command/commandGateway';

export const createCommand = (_command: ICommandCreate): ThunkResult<Promise<void>> => async (dispatch, getState, {commandGateway}:{commandGateway : ICommandGateway}) => {
  dispatch(actionCreator.Actions.createCommand);
  const {response, error} = await commandGateway.createCommandClient(_command);
  if(!error) {
    dispatch(actionCreator.Actions.commandCreated(response.data));
  }
}

export const retrieveCommandsInformations = (): ThunkResult<Promise<void>> => async (dispatch, getState, {commandsInformationGateway}: {commandsInformationGateway: ICommandGateway}) => {
  dispatch(actionCreator.Actions.retrieveCommands());
  commandsInformationGateway = new CommandGateway();
  const commands = await commandsInformationGateway.retrieve();
  dispatch(actionCreator.Actions.commandsRetrieved(commands.response));
}