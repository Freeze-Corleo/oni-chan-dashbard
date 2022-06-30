import { ActionsUnion, createAction } from '../../../store';
import * as _actions from '../index';

// Define the Actions of notifications to update
// and synchornise the store data
// especially the notifications data
export const Actions = {
  addProduct: (options: {}) => createAction(_actions.ADD_PRODUCT_IN_BASKET, options),
  removeProduct: (id: string) => createAction(_actions.REMOVE_PRODUCT_FROM_BASKET, id),
  retrieveProduct: () => createAction(_actions.RETRIEVE_PRODUCTS_FROM_BASKET)
};

export type Actions = ActionsUnion<typeof Actions>;