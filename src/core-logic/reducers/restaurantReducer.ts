import { combineReducers } from "redux";
import { IRestaurant } from '../../appState';
import * as retrievalRestaurantActionCreator from '../usecases/restaurant/actionCreator';
import * as actions from '../usecases/index';


export type IReducerState = {
  message: string | null,
  restaurant: IRestaurant | null,
  restaurants: IRestaurant[] | null,
}

export const data = (
  state: IReducerState | null = null,
  action: retrievalRestaurantActionCreator.Actions
) => {
  switch (action.type) {
    case actions.RESTAURANTS_RETRIEVED:
      return {...state, restaurants: action.payload};
    case actions.RESTAURANT_RETRIEVED:
      return {
        ...state,
        product: action.payload
      };
    case actions.RESTAURANT_UPDATED:
      return {
        ...state, message: action.payload.message, restaurant: action.payload.restaurant
      }
    case actions.RESTAURANT_DELETED:
      return {
        ...state, message: action.payload
      }
    case actions.RESTAURANT_CREATED:
      return {
        ...state, message: action.payload
      }
    case actions.RESTAURANTS_BY_PARTNER_RETRIEVED:
      return action.payload
    default: return state;
  }
}

const setLoading = (action: retrievalRestaurantActionCreator.Actions, actionLoading: string, actionDone: string) => {
  if (action.type === actionLoading) { return true; }
  if (action.type === actionDone) { return false; }
  return false;
};


const isLoading = (state: boolean = false, action: retrievalRestaurantActionCreator.Actions) => {
  setLoading(action, actions.RETRIEVE_RESTAURANTS , actions.RESTAURANTS_RETRIEVED);
  setLoading(action, actions.RETRIEVE_RESTAURANT, actions.RESTAURANT_RETRIEVED);
  setLoading(action, actions.UPDATE_RESTAURANT , actions.RESTAURANT_UPDATED);
  setLoading(action, actions.DELETE_RESTAURANT, actions.RESTAURANT_UPDATED);
  setLoading(action, actions.CREATE_RESTAURANT , actions.RESTAURANT_CREATED);
  return state;
};

export const restaurantReducer = combineReducers({
  isLoading,
  data,
});