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
    case actions.COMMANDS_RETRIEVED:
      return {...state, commands: action.payload};
    case actions.HISTO_BY_USER_RETRIEVED:
      return {...state, commands: action.payload};
    case actions.COMMANDS_FROM_RESTO_RETRIEVED:
      return action.payload;
    case actions.COMMAND_UPDATED:
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