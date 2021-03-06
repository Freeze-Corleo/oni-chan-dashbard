import { IRestaurantGateway } from "../../gateways/restaurantGateway";
import {  IRestaurant, IAddress } from '../../../appState';
import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';
import { RestaurantGateway } from "../../../secondary-adapters/restaurant/restaurantGateway";

import { displayToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';
import { getStatisticsById } from "../../../secondary-adapters/services/restaurant/restaurant.service";

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
export const retrieveRestaurantInformation = (_id: string | undefined): ThunkResult<Promise<void>> => async (dispatch, getState, { restaurantInfoGate }: {restaurantInfoGate: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.retrieveRestaurant());
  restaurantInfoGate = new RestaurantGateway();
  const restaurant = await restaurantInfoGate.retrieveOne(_id);
  dispatch(actionCreator.Actions.restaurantRetrieved(restaurant));
}

// Action that will be called in frontend, will disptach notification
//  and will load the product to the Product reducer.
export const updateRestaurantInformation = (_id: string | undefined, _restaurant: IRestaurant): ThunkResult<Promise<void>> => async (dispatch, getState, {restaurantInfoGate}: {restaurantInfoGate: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.updateRestaurant());
  restaurantInfoGate = new RestaurantGateway();
  const {restaurant, message} = await restaurantInfoGate.update(_id, _restaurant);
  dispatch(actionCreator.Actions.restaurantUpdated(restaurant, message));
}

// Action that will be called in frontend, will disptach notification
//  and will load the product to the Product reducer.
export const deleteRestaurantInformation = (_id: string | undefined): ThunkResult<Promise<void>> => async (dispatch, getState, { restaurantGateway }: {restaurantGateway: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.deleteRestaurant(_id));
  restaurantGateway = new RestaurantGateway();
  const message: string = await restaurantGateway.delete(_id);
  dispatch(actionCreator.Actions.restaurantDeleted(message));
}

export const createRestaurantInformation = (_restaurant: IRestaurant, _address: IAddress, _restorerId: string): ThunkResult<Promise<void>> =>  async (dispatch, getState, { restaurantGateway }: {restaurantGateway: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.createRestaurant());
  const {response, error} = await restaurantGateway.create(_restaurant, _address, _restorerId);
  if(!error) {
    dispatch(actionCreator.Actions.restaurantCreated(response.data));
    dispatch(
      displayToastNotification({
        text: 'Le restaurant a ??t?? cr??e avec succ??s',
        severityLevel: 'success',
        severityTitle: 'Cr??ation r??ussie',
      })
    );
  } else {
    dispatch(
      displayToastNotification({
        text: 'Une erreur est survenue lors de la cr??ation du restaurant',
        severityLevel: 'error',
        severityTitle: 'Cr??ation non r??ussie',
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

export const getStatisticsByRestaurantId = (_restaurantId: string): ThunkResult<Promise<void>> => async (dispatch, getState, {restaurantGateway}: {restaurantGateway: IRestaurantGateway}) => {
  dispatch(actionCreator.Actions.retrieveRestaurantsStatistics());
  //getStatisticsById(_restaurantId)
  const {response, error} = await restaurantGateway.retrieveStatistics(_restaurantId);
  if(!error && response !== null) {
    dispatch(actionCreator.Actions.restaurantsStatisticsRetrieved());
  }
}
