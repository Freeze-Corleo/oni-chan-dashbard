import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';
import { IPartnerGateway } from '../../gateways/partnerGateway';

import { displayToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';


// Action for partner retrieving
export const retrievePartners = (): ThunkResult<Promise<void>> => async (dispatch, getState, {partnerGateway}: {partnerGateway: IPartnerGateway}) => {
  dispatch(actionCreator.Actions.retrievePartners());
  const {response, error} = (await partnerGateway.retrieve());
  if(!error) {
    dispatch(actionCreator.Actions.partnersRetrieved(response));
  }
}


export const createPartnership = (_credentials: {id: string, password: string, status: string}): ThunkResult<Promise<void>> => async (dispatch, getState, {partnerGateway}: {partnerGateway: IPartnerGateway}) => {
  dispatch(actionCreator.Actions.retrievePartners());
  const {response, error} = (await partnerGateway.createPartner(_credentials));
  if(!error) {
    const {response, error} = (await partnerGateway.retrieve());
    if(!error) {
      dispatch(actionCreator.Actions.partnersRetrieved(response));
    }
    dispatch(
      displayToastNotification({
        text: 'Le partenaire a été crée avec un utilisatuer',
        severityLevel: 'success',
        severityTitle: 'Création faite !',
      })
    );
  } else {
    dispatch(
      displayToastNotification({
        text: 'Une erreur est survenue lors de la création utilisatuer',
        severityLevel: 'error',
        severityTitle: 'Création non réussie',
      })
    );
  }
}

export const refusingParntership = (_credentials: {id: string, password: string, status: string}): ThunkResult<Promise<void>> => async (dispatch, getState, {partnerGateway}: {partnerGateway: IPartnerGateway}) => {
  dispatch(actionCreator.Actions.retrievePartners());
  const {response, error} = (await partnerGateway.createPartner(_credentials));
  if(!error) {
    const {response, error} = (await partnerGateway.retrieve());
    if(!error) {
      dispatch(actionCreator.Actions.partnersRetrieved(response));
    }
    dispatch(
      displayToastNotification({
        text: 'Le partenaire a été refusé',
        severityLevel: 'success',
        severityTitle: 'Refus fait !',
      })
    );
  } else {
    dispatch(
      displayToastNotification({
        text: 'Une erreur est survenue lors du refus utilisateur',
        severityLevel: 'error',
        severityTitle: 'Refus non réussi',
      })
    );
  }
}