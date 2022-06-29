import { AppState } from '../appState';

export const selectBasketReducer = (state: AppState) => {
  return  state.basket.data;
};