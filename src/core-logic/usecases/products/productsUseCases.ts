import { IProductGateway } from "../../gateways/productGateway";
import { IProduct, ICustomizationCreate, IProductCreate } from '../../../appState';
import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';
import { ProductGateway } from "../../../secondary-adapters/products/productGateway";

import { displayToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';

// Action that will be called in frontend, will disptach notification
//  and will load the product list to the Product reducer.
export const retrieveProductsInformations = (_categoryId: string): ThunkResult<Promise<void>> => async (dispatch, getState, {productsInformationGateway}: {productsInformationGateway: IProductGateway}) => {
  dispatch(actionCreator.Actions.retrieveProducts());
  productsInformationGateway = new ProductGateway();
  const products = await productsInformationGateway.retrieveByCategory(_categoryId);
  dispatch(actionCreator.Actions.productsRetrieved(products.response));
}

// Action that will be called in frontend, will disptach notification
//  and will load the product to the Product reducer.
export const retrieveProductInformation = (_id: string): ThunkResult<Promise<void>> => async (dispatch, getState, { productInfoGate }: {productInfoGate: IProductGateway}) => {
  dispatch(actionCreator.Actions.retrieveProduct());
  const product = await productInfoGate.retrieveOne(_id);
  dispatch(actionCreator.Actions.productRetrieved(product));
}

// Action that will be called in frontend, will disptach notification
//  and will load the product to the Product reducer.
export const updateProductInformation = (_id: string, _product: IProduct): ThunkResult<Promise<void>> => async (dispatch, getState, {productInfoGate}: {productInfoGate: IProductGateway}) => {
  dispatch(actionCreator.Actions.updateProduct());
  const {product, message} = await productInfoGate.update(_id, _product);
  dispatch(actionCreator.Actions.productUpdated(product, message));
}

// Action that will be called in frontend, will disptach notification
//  and will load the product to the Product reducer.
export const deleteProductInformation = (_id: string, _restaurantId: string): ThunkResult<Promise<void>> => async (dispatch, getState, { productGateway }: {productGateway: IProductGateway}) => {
  dispatch(actionCreator.Actions.deleteProduct());
  const {response, error} = await productGateway.delete(_id, _restaurantId);
  if(!error) {
    dispatch(actionCreator.Actions.productDeleted(response.data));
  }
}

export const createProductInformation = (_customizations: ICustomizationCreate[], _product: IProductCreate, _restaurantId: string, _categoryId: string): ThunkResult<Promise<void>> =>  async (dispatch, getState, { productGateway }: {productGateway: IProductGateway}) => {
  dispatch(actionCreator.Actions.createProduct());
  const {response, error} = await productGateway.create(_customizations, _product, _restaurantId, _categoryId);
  if(!error) {
    dispatch(actionCreator.Actions.productCreated(response));
    dispatch(
      displayToastNotification({
        text: 'La création du produit a été faites avec succès',
        severityLevel: 'success',
        severityTitle: 'Création faite !',
      })
    );
  } else {
    dispatch(
      displayToastNotification({
        text: 'Une erreur est survenue lors de la création du produit',
        severityLevel: 'error',
        severityTitle: 'Erreur de création',
      })
    );
  }
}

export const createMenuProduct = (_customizations: ICustomizationCreate[], _product: IProductCreate, _restaurantId: string, _categoryId: string): ThunkResult<Promise<void>> =>  async (dispatch, getState, { productGateway }: {productGateway: IProductGateway}) => {
  dispatch(actionCreator.Actions.createProduct());
  const {response, error} = await productGateway.create(_customizations, _product, _restaurantId, _categoryId);
  if(!error) {
    dispatch(actionCreator.Actions.productCreated(response));
    dispatch(
      displayToastNotification({
        text: 'La création du produit a été faites avec succès',
        severityLevel: 'success',
        severityTitle: 'Création faite !',
      })
    );
  } else {
    dispatch(
      displayToastNotification({
        text: 'Une erreur est survenue lors de la création du produit',
        severityLevel: 'error',
        severityTitle: 'Erreur de création',
      })
    );
  }
}


