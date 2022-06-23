import { ThunkAction, Action } from '@reduxjs/toolkit';

import { configureStore } from '../store';

import { ProductGateway } from '../secondary-adapters/products/productGateway';
import { AuthenticationGateway } from '../secondary-adapters/auth/authGateway';
import { UserGateway } from '../secondary-adapters/users/userGateway';
import { PartnerGateway } from '../secondary-adapters/partners/partnerGateway';

// Instiate all gateways
const productGateway = new ProductGateway();
const authGateway = new AuthenticationGateway();
const userGateway = new UserGateway();
const partnerGateway = new PartnerGateway();

// Implement gateways as redux middleware
export const store = configureStore({
  productGateway,
  authGateway,
  userGateway,
  partnerGateway
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
