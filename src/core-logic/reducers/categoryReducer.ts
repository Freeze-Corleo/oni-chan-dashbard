import { combineReducers } from "redux";
import * as categoryActionCreator from '../usecases/category/actionCreator';
import * as actions from '../usecases/index';

// Reducer's state will have a type of array of object
// with at least in this object id field
export type IReducerState = {}&{id : number, price: number, img: string, name: string}[];

export const data = (
  state: IReducerState = [],
  action: categoryActionCreator.Actions
) => {
  switch (action.type) {
    case actions.CATEGORY_CREATED:
      return action.payload;
    case actions.CATEGORIES_RETRIEVED:
      return action.payload;
    default: return state;
  }
}


const isLoading = () => {
  return false
};

export const categoryReducer = combineReducers({
  isLoading,
  data,
});