import { combineReducers } from "redux";
import { IProduct } from '../../appState';
import * as retrievalProductActionCreator from '../usecases/products/actionCreator';
import * as actions from '../usecases/index';


export type IReducerState = {
  message: string | null,
  product: IProduct | null,
  products: IProduct[] | null,
}

export const data = (
  state: IProduct[] | null = null,
  action: retrievalProductActionCreator.Actions
) => {
  switch (action.type) {
    case actions.PRODUCTS_RETRIEVED:
      return action.payload;
    case actions.PRODUCT_RETRIEVED:
      return {
        ...state,
        product: action.payload
      };
    case actions.PRODUCT_UPDATED:
      return {
        ...state, message: action.payload.message, product: action.payload.product
      }
    case actions.PRODUCT_DELETED:
      if(state) {
        const newState = state?.filter(product => product._id !== action.payload);
        return newState;
      } else {
        return state;
      }
    case actions.PRODUCT_CREATED:
      if(state !== null) {
        return [...state, action.payload]
      } else {
        return action.payload;
      }

    default: return state;
  }
}

const setLoading = (action: retrievalProductActionCreator.Actions, actionLoading: string, actionDone: string) => {
  if (action.type === actionLoading) { return true; }
  if (action.type === actionDone) { return false; }
  return false;
};


const isLoading = (state: boolean = false, action: retrievalProductActionCreator.Actions) => {
  setLoading(action, actions.RETRIEVE_PRODUCTS , actions.PRODUCTS_RETRIEVED);
  setLoading(action, actions.RETRIEVE_PRODUCT, actions.PRODUCT_RETRIEVED);
  setLoading(action, actions.UPDATE_PRODUCT , actions.PRODUCT_UPDATED);
  setLoading(action, actions.DELETE_PRODUCT, actions.PRODUCT_UPDATED);
  setLoading(action, actions.CREATE_PRODUCT , actions.PRODUCT_CREATED);
  return state;
};

export const productReducer = combineReducers({
  isLoading,
  data,
});