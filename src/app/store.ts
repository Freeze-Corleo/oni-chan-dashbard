import { ThunkAction, Action } from '@reduxjs/toolkit';

import { configureStore } from '../store';

import { ProductGateway } from '../secondary-adapters/products/productGateway';

// Instiate all gateways
const productGateway = new ProductGateway();

// Implement gateways as redux middleware
export const store = configureStore({
  productGateway,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
