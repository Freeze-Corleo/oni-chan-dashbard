import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';

import { ICommandCreate } from '../../../appState';

import { ICommandGateway } from '../../gateways/commandGateway';
import { CommandGateway } from '../../../secondary-adapters/command/commandGateway';

export const createCommand = (_command: ICommandCreate): ThunkResult<Promise<void>> => async (dispatch, getState, {commandGateway}:{commandGateway : ICommandGateway}) => {
  dispatch(actionCreator.Actions.createCommand);
  const {response, error} = await commandGateway.createCommandClient(_command);
  if(!error) {
    dispatch(actionCreator.Actions.commandCreated(response));
  }
}

export const retrieveCommandsFromRestorer = (_restoId: string): ThunkResult<Promise<void>> => async (dispatch, getState, {commandGateway}:{commandGateway : ICommandGateway}) => {
  dispatch(actionCreator.Actions.retrieveCommandsFromRestaurant);
  const {response, error} = await commandGateway.retrieveRestorerCommands(_restoId);
  if(!error) {
    dispatch(actionCreator.Actions.commandsFromRestaurantsRetrieved(response));
  }
}

export const retrieveCommandsInformations = (): ThunkResult<Promise<void>> => async (dispatch, getState, {commandsInformationGateway}: {commandsInformationGateway: ICommandGateway}) => {
  dispatch(actionCreator.Actions.retrieveCommands());
  commandsInformationGateway = new CommandGateway();
  const commands = await commandsInformationGateway.retrieve();
  dispatch(actionCreator.Actions.commandsRetrieved(commands.response));
}

export const retrieveHistoCommandByUser = (_id: string, person: string): ThunkResult<Promise<void>> => async (dispatch, getState, {commandsInformationGateway}: {commandsInformationGateway: ICommandGateway}) => {
  dispatch(actionCreator.Actions.retrieveHistoByUser());
  commandsInformationGateway = new CommandGateway();
  const commands = await commandsInformationGateway.retrieveHistoryCommands(_id, person);
  dispatch(actionCreator.Actions.histoByUserRetrieved(commands.response));
}

export const deleteACommand = (_commandId: string): ThunkResult<Promise<void>> => async (dispatch, getState, {commandGateway}:{commandGateway : ICommandGateway}) => {
  const {response, error} = await commandGateway.deleteCommand(_commandId);
  if(!error) {
    dispatch(actionCreator.Actions.deleteSpecificCommand(response.data));
  }
}

export const updateCommand = (_commandId: string, state: string, deliveryId: string): ThunkResult<Promise<void>> => async (dispatch, getState, {commandGateway}:{commandGateway : ICommandGateway}) => {
  dispatch(actionCreator.Actions.updateCommand);
  const {response, error} = await commandGateway.updateCommand(_commandId, state, deliveryId);
  if(!error) {
    dispatch(actionCreator.Actions.commandUpdated(response.data));
  }
}