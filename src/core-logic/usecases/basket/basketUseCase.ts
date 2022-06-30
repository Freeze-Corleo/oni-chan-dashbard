import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';

import { displayToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';

// Action for notification displaying
export const dispatchAddProduct = (options: {}): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  dispatch(actionCreator.Actions.addProduct(options));
  dispatch(
    displayToastNotification({
      text: 'Votre produit a bien été ajouté au panier',
      severityLevel: 'info',
      severityTitle: 'Miaaam !',
    })
  );
}

// Action for notification removal
export const dispatchRemoveProduct =  (id: string): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  dispatch(actionCreator.Actions.removeProduct(id));
  dispatch(
    displayToastNotification({
      text: 'Votre produit a bien été enlevé du panier',
      severityLevel: 'info',
      severityTitle: 'En mode régime!',
    })
  );
}

export const retrieveProductsFromBasket = (): ThunkResult<Promise<void>> => async (dispatch, get) => {
  console.log('hannnn');
  dispatch(actionCreator.Actions.retrieveProduct);
}