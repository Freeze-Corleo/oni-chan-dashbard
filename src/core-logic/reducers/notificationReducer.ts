import { combineReducers } from "redux";
import * as notificationActionCreator from '../usecases/notifications/actionCreator';
import * as actions from '../usecases/index';

// Reducer's state will have a type of array of object
// with at least in this object id field
export type IReducerState = {}&{id:number}[];



export const data = (
  state: IReducerState = [],
  action: notificationActionCreator.Actions
) => {
  switch (action.type) {
    case actions.REMOVE_TOAST:
      return state.filter((toast) => toast.id !== +action.payload);
    case actions.ADD_TOAST:
      const toastMeta = action.payload;
      if(typeof toastMeta === "string") {
        return state;
      } else {
        return [toastMeta, ...state];
      }

    default: return state;
  }
}


const isLoading = () => {
  return false
};

export const notificationReducer = combineReducers({
  isLoading,
  data,
});