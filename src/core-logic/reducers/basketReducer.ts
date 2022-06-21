import { combineReducers } from "redux";
import * as basketActionCreator from '../usecases/basket/actionCreator';
import * as actions from '../usecases/index';

// Reducer's state will have a type of array of object
// with at least in this object id field
export type IReducerState = {}&{id : number, price: number, img: string, name: string}[];

export const data = (
  state: IReducerState = [],
  action: basketActionCreator.Actions
) => {
  switch (action.type) {
    case actions.REMOVE_PRODUCT_FROM_BASKET:
      return state.filter((product) => product.id !== +action.payload);
    case actions.ADD_PRODUCT_IN_BASKET:
      return [...state, action.payload];
    default: return state;
  }
}


const isLoading = () => {
  return false
};

export const basketReducer = combineReducers({
  isLoading,
  data,
});