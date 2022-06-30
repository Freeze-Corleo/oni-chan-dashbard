import { ICommand } from '../../appState';
import { combineReducers } from "redux";
import * as commandActionCreator from '../usecases/command/actionCreator';
import * as actions from '../usecases/index';

// Reducer's state will have a type of array of object
// with at least in this object id field
export type IReducerState = ICommand[];

export const data = (
  state: IReducerState = [],
  action: commandActionCreator.Actions
) => {
  switch (action.type) {
    case actions.COMMAND_CREATED:
      return [action.payload];
    default: return state;
  }
}


const isLoading = () => {
  return false
};

export const commandReducer = combineReducers({
  isLoading,
  data,
});