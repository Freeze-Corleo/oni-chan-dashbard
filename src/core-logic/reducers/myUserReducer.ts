import { combineReducers } from "redux";
import * as myUserActionCreator from '../usecases/my-profil/actionCreator';
import * as actions from '../usecases/index';

import { IMyProfil } from '../../appState';

// Reducer's state will have a type of array of object
// with at least in this object id field
export type IReducerState = {
  isLoading: boolean;
  data: {myProfil: IMyProfil}
};

export const data = (
  state: IReducerState | null = null,
  action: myUserActionCreator.Actions
) => {
  switch (action.type) {
    case actions.HYDRATE_MY_USER_FROM_VERIFY_CODE:
      return {myProfil: action.payload}
    case actions.UPDATE_MY_USER:
      return {myProfil: action.payload}
    case actions.HYDRATE_MY_USER_FROM_GOOGLE:
      return {myProfil: action.payload}
    case actions.HYDRATE_MY_USER_FROM_LOGIN:
      return {myProfil: action.payload}
    default: return state;
  }
}


const isLoading = () => {
  return false
};

export const myUserReducer = combineReducers({
  isLoading,
  data,
});