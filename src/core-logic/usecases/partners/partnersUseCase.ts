import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';
import { IPartnerGateway } from '../../gateways/partnerGateway';

// Action for partner retrieving
export const retrievePartners = (): ThunkResult<Promise<void>> => async (dispatch, getState, {partnerGateway}: {partnerGateway: IPartnerGateway}) => {
  dispatch(actionCreator.Actions.retrievePartners());
  const {response, error} = (await partnerGateway.retrieve());
  if(!error) {
    dispatch(actionCreator.Actions.partnersRetrieved(response));
  }
}

