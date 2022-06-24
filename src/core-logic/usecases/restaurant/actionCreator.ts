import { ActionsUnion, createAction } from '../../../store';
import { IRestaurant } from '../../../appState';
import * as _actions from '../index';

// Define the Actions of restaurants to update
// and synchornise the store data
// especially the restaurant data
export const Actions = {
  retrieveRestaurants: () => createAction(_actions.RETRIEVE_RESTAURANTS),
  restaurantsRetrieved: (restaurants: IRestaurant[] | null) => createAction(_actions.RESTAURANTS_RETRIEVED, restaurants),
  retrieveRestaurant: () => createAction(_actions.RETRIEVE_RESTAURANT),
  restaurantRetrieved: (restaurant: IRestaurant | null) => createAction(_actions.RESTAURANT_RETRIEVED, restaurant),
  updateRestaurant: () => createAction(_actions.UPDATE_RESTAURANT),
  restaurantUpdated: (restaurant: IRestaurant | null, message: string) => createAction(_actions.RESTAURANT_UPDATED, {restaurant, message}),
  deleteRestaurant: (id: string) => createAction(_actions.DELETE_RESTAURANT, id),
  restaurantDeleted: (message: string) => createAction(_actions.RESTAURANT_DELETED, message),
  createRestaurant: () => createAction(_actions.CREATE_RESTAURANT),
  restaurantCreated: (message: string | null) => createAction(_actions.RESTAURANT_CREATED, message),
};

export type Actions = ActionsUnion<typeof Actions>;