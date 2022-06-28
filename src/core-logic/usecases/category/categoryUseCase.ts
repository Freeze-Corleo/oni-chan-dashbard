import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';

import { ICategoryCreate } from '../../../appState';

import { ICategoryGateway } from '../../gateways/categoryGateway';

import { displayToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';

export const createCategory = (_categoryData: ICategoryCreate): ThunkResult<Promise<void>> => async (dispatch, getState, {categoryGateway}: {categoryGateway: ICategoryGateway}) => {
  dispatch(actionCreator.Actions.createCategory());
  const {response, error} = await categoryGateway.createCategory(_categoryData);
  if(!error) {
    dispatch(actionCreator.Actions.categoryCreated(response));
    dispatch(
      displayToastNotification({
        text: 'La catégorie a bien été crée',
        severityLevel: 'success',
        severityTitle: 'Création faite !',
      })
    );
  } else {
    dispatch(
      displayToastNotification({
        text: 'Une erreur est survenue lors de la création de la catégorie',
        severityLevel: 'error',
        severityTitle: 'Création non réussie',
      })
    );
  }
}

export const retrieveCategories = (_restaurantId: string): ThunkResult<Promise<void>> => async (dispatch, getState, {categoryGateway}: {categoryGateway: ICategoryGateway}) => {
  dispatch(actionCreator.Actions.retrieveCategories());
  const {response, error} = await categoryGateway.retrieveCategories(_restaurantId);
  if(!error) {
    dispatch(actionCreator.Actions.categoriesRetrieved(response));
  }
}