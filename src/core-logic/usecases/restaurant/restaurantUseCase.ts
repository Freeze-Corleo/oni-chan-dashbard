import { IRestaurantGateway } from "../../gateways/restaurantGateway";
import {  IRestaurant, IAddress } from '../../../appState';
import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';
import { RestaurantGateway } from "../../../secondary-adapters/restaurant/restaurantGateway";

import { displayToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';

// Action that will be called in frontend, will disptach notification
//  and will load the product list to the Product reducer.
export const retrieveRestaurantsInformations = (): ThunkResult<Promise<void>> => async (dispatch, getState, {restaurantsInformationGateway}: {restaurantsInformationGateway: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.retrieveRestaurants());
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
export const deleteRestaurantInformation = (_id: string): ThunkResult<Promise<void>> => async (dispatch, getState, { restaurantGateway }: {restaurantGateway: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.deleteRestaurant(_id));
  const message: string = await restaurantGateway.delete(_id);
  dispatch(actionCreator.Actions.restaurantDeleted(message));
}

export const createRestaurantInformation = (_restaurant: IRestaurant, _address: IAddress, _restorerId: string): ThunkResult<Promise<void>> =>  async (dispatch, getState, { restaurantGateway }: {restaurantGateway: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.createRestaurant());
  const {response, error} = await restaurantGateway.create(_restaurant, _address, _restorerId);
  if(!error) {
    dispatch(actionCreator.Actions.restaurantCreated(response));
    dispatch(
      displayToastNotification({
        text: 'Le restaurant a été crée avec succès',
        severityLevel: 'success',
        severityTitle: 'Création réussie',
      })
    );
  } else {
    dispatch(
      displayToastNotification({
        text: 'Une erreur est survenue lors de la création du restaurant',
        severityLevel: 'error',
        severityTitle: 'Création non réussie',
      })
    );
  }
}

export const getRestaurantsByPartner = (_userId: string): ThunkResult<Promise<void>> => async (dispatch, getState, {restaurantGateway}: {restaurantGateway: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.retrieveRestaurantByPartner());
  const {response, error} = await restaurantGateway.retrieveByPartner(_userId);
  if(!error && response !== null) {
    dispatch(actionCreator.Actions.restaurantByPartnerRetrieved(response.data));
  }
}
