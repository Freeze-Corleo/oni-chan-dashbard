import { AppState, IRestaurantRetrieve } from '../appState';

import { pick } from '../helpers/field-selector';

export const selectRestaurantReducer = (state: AppState) => state.restaurant.data;

// export const selectRestaurantUniqueReducer = (state: AppState) => state.restaurant.data?.product;

export const selecteRestaurantWithout = (state: AppState) => {
  const newRestaurants: IRestaurantRetrieve[] | null = [];
  state.restaurant.data?.forEach((restaurant) => {
    const data = pick(restaurant, "name", "rate", "deliveryPrice", "address", "city", "zipCode", "price", "cookType", "isAvailable", "_id") as IRestaurantRetrieve;
    newRestaurants.push(data)
  })
  return newRestaurants;
}