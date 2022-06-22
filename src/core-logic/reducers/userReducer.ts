import { combineReducers } from "redux";
import { IUser } from '../../appState';
import * as retrievalUserActionCreator from '../usecases/users/actionCreator';
import * as actions from '../usecases/index';


export type IReducerState = {
  message: string | null,
  user: IUser | null
}

export const data = (
  state: IReducerState | null = null,
  action: retrievalUserActionCreator.Actions
) => {
  switch (action.type) {
    case actions.SPECIFIC_USER_RETRIEVED:
      return action.payload;
    case actions.SPECIFIC_USER_UPDATED:
      return action.payload;
    default: return state;
  }
}

const setLoading = (action: retrievalUserActionCreator.Actions, actionLoading: string, actionDone: string) => {
  if (action.type === actionLoading) { return true; }
  if (action.type === actionDone) { return false; }
  return false;
};


const isLoading = (state: boolean = false, action: retrievalUserActionCreator.Actions) => {
  setLoading(action, actions.RETRIEVE_PRODUCTS , actions.PRODUCTS_RETRIEVED);
  setLoading(action, actions.RETRIEVE_PRODUCT, actions.PRODUCT_RETRIEVED);
  setLoading(action, actions.UPDATE_PRODUCT , actions.PRODUCT_UPDATED);
  setLoading(action, actions.DELETE_PRODUCT, actions.PRODUCT_UPDATED);
  setLoading(action, actions.CREATE_PRODUCT , actions.PRODUCT_CREATED);
  return state;
};

export const userReducer = combineReducers({
  isLoading,
  data,
});