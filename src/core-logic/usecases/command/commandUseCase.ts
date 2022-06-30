import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';

import { ICommandCreate } from '../../../appState';

import { ICommandGateway } from '../../gateways/commandGateway';

export const createCommand = (_command: ICommandCreate): ThunkResult<Promise<void>> => async (dispatch, getState, {commandGateway}:{commandGateway : ICommandGateway}) => {
  dispatch(actionCreator.Actions.createCommand);
  const {response, error} = await commandGateway.createCommandClient(_command);
  if(!error) {
    dispatch(actionCreator.Actions.commandCreated(response.data));
  }
}