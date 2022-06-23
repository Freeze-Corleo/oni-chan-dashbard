import { combineReducers } from "redux";
import * as partnerActionCreator from '../usecases/partners/actionCreator';
import * as actions from '../usecases/index';

import { IPartner } from '../../appState';

// Reducer's state will have a type of array of object
// with at least in this object id field
export type IReducerState = {
  isLoading: boolean;
  data: IPartner
};

export const data = (
  state: IReducerState | null = null,
  action: partnerActionCreator.Actions
) => {
  switch (action.type) {
    case actions.PARTNERS_RETRIEVED:
      return action.payload
    default: return state;
  }
}


const setLoading = (action: partnerActionCreator.Actions, actionLoading: string, actionDone: string) => {
  if (action.type === actionLoading) { return true; }
  if (action.type === actionDone) { return false; }
  return false;
};


const isLoading = (state: boolean = false, action: partnerActionCreator.Actions) => {
  setLoading(action, actions.RETRIEVE_PARTNERS , actions.PARTNERS_RETRIEVED);
  return state;
};

export const partnerReducer = combineReducers({
  isLoading,
  data,
});