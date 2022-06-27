import { AppState } from '../appState';

export const selectRestaurantReducer = (state: AppState) => state.restaurant.data;

// export const selectRestaurantUniqueReducer = (state: AppState) => state.restaurant.data?.product;