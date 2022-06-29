import { AppState } from '../appState';

export const selectProductReducer = (state: AppState) => state.product.data;

export const selectCategoryProductReducer = (state: AppState) => state.category;