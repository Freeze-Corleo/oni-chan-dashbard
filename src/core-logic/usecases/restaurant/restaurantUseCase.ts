import { IRestaurantGateway } from "../../gateways/restaurantGateway";
import {  IRestaurant } from '../../../appState';
import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';
import { RestaurantGateway } from "../../../secondary-adapters/restaurant/restaurantGateway";

// Action that will be called in frontend, will disptach notification
//  and will load the product list to the Product reducer.
export const retrieveRestaurantsInformations = (): ThunkResult<Promise<void>> => async (dispatch, getState, {restaurantsInformationGateway}: {restaurantsInformationGateway: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.retrieveRestaurants());
  restaurantsInformationGateway = new RestaurantGateway();
  const restaurants = await restaurantsInformationGateway.retrieve();
  dispatch(actionCreator.Actions.restaurantsRetrieved(restaurants.response));
}

// Action that will be called in frontend, will disptach notification
//  and will load the product to the Product reducer.
export const retrieveRestaurantInformation = (_id: string): ThunkResult<Promise<void>> => async (dispatch, getState, { restaurantInfoGate }: {restaurantInfoGate: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.retrieveRestaurant());
  restaurantInfoGate = new RestaurantGateway();
  console.log("usecases")
  const restaurant = await restaurantInfoGate.retrieveOne(_id);
  dispatch(actionCreator.Actions.restaurantRetrieved(restaurant));
}

// Action that will be called in frontend, will disptach notification
//  and will load the product to the Product reducer.
export const updateRestaurantInformation = (_id: string, _restaurant: IRestaurant): ThunkResult<Promise<void>> => async (dispatch, getState, {restaurantInfoGate}: {restaurantInfoGate: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.updateRestaurant());
  const {restaurant, message} = await restaurantInfoGate.update(_id, _restaurant);
  dispatch(actionCreator.Actions.restaurantUpdated(restaurant, message));
}

// Action that will be called in frontend, will disptach notification
//  and will load the product to the Product reducer.
export const deleteRestaurantInformation = (_id: string): ThunkResult<Promise<void>> => async (dispatch, getState, { restaurantInfoGate }: {restaurantInfoGate: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.deleteRestaurant(_id));
  const message: string = await restaurantInfoGate.delete(_id);
  dispatch(actionCreator.Actions.restaurantDeleted(message));
}

export const createRestaurantInformation = (_restaurant: IRestaurant): ThunkResult<Promise<void>> =>  async (dispatch, getState, { restaurantInfoGate }: {restaurantInfoGate: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.createRestaurant());
  restaurantInfoGate = new RestaurantGateway();
  const message = await restaurantInfoGate.create(_restaurant);
  dispatch(actionCreator.Actions.restaurantCreated(message));
}

