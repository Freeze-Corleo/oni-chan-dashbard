import { IProductGateway } from "../../gateways/productGateway";
import { IProduct } from '../../../appState';
import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';

// Action that will be called in frontend, will disptach notification
//  and will load the product list to the Product reducer.
export const retrieveProductsInformations = (): ThunkResult<Promise<void>> => async (dispatch, getState, {productsInformationGateway}: {productsInformationGateway: IProductGateway}) => {
  dispatch(actionCreator.Actions.retrieveProducts());
  const products = await productsInformationGateway.retrieve();
  dispatch(actionCreator.Actions.productsRetrieved(products));
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
export const deleteProductInformation = (_id: string): ThunkResult<Promise<void>> => async (dispatch, getState, { productInfoGate }: {productInfoGate: IProductGateway}) => {
  dispatch(actionCreator.Actions.deleteProduct(_id));
  const message: string = await productInfoGate.delete(_id);
  dispatch(actionCreator.Actions.productDeleted(message));
}

export const createProductInformation = (_product: IProduct): ThunkResult<Promise<void>> =>  async (dispatch, getState, { productInfoGate }: {productInfoGate: IProductGateway}) => {
  dispatch(actionCreator.Actions.createProduct());
  const message = await productInfoGate.create(_product);
  dispatch(actionCreator.Actions.productCreated(message));
}

