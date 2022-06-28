import { ActionsUnion, createAction } from '../../../store';
import { IProduct } from '../../../appState';
import * as _actions from '../index';

// Define the Actions of products to update
// and synchornise the store data
// especially the product data
export const Actions = {
  retrieveProducts: () => createAction(_actions.RETRIEVE_PRODUCTS),
  productsRetrieved: (products: IProduct[] | null) => createAction(_actions.PRODUCTS_RETRIEVED, products),
  retrieveProduct: () => createAction(_actions.RETRIEVE_PRODUCT),
  productRetrieved: (product: IProduct | null) => createAction(_actions.PRODUCT_RETRIEVED, product),
  updateProduct: () => createAction(_actions.UPDATE_PRODUCT),
  productUpdated: (product: IProduct | null, message: string) => createAction(_actions.PRODUCT_UPDATED, {product, message}),
  deleteProduct: () => createAction(_actions.DELETE_PRODUCT),
  productDeleted: (message: string) => createAction(_actions.PRODUCT_DELETED, message),
  createProduct: () => createAction(_actions.CREATE_PRODUCT),
  productCreated: (message: string | null) => createAction(_actions.PRODUCT_CREATED, message),
};

export type Actions = ActionsUnion<typeof Actions>;