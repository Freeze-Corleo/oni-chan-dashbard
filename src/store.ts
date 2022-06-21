import {
  Action, applyMiddleware, combineReducers, createStore, Store,
} from 'redux';
import thunk, { ThunkAction, ThunkDispatch, ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState } from './appState';

import { productReducer as product} from './core-logic/reducers/productReducer';
import { notificationReducer as notification } from './core-logic/reducers/notificationReducer';
import { myUserReducer as myUser } from './core-logic/reducers/myUserReducer';

import { ProductGateway } from './secondary-adapters/products/productGateway';
import { AuthenticationGateway } from './secondary-adapters/auth/authGateway';

export interface Dependencies {
  productGateway: ProductGateway;
  authGateway: AuthenticationGateway;
}

// custom combine store to implmenent it with middlewares that will be used in actions
export const configureStore = (dependencies: Partial<Dependencies>): ReduxStore => createStore(
  combineReducers({
    product,
    notification,
    myUser
  }),
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(dependencies) as ThunkMiddleware<AppState, Action, any>),
  ),
);

// Type the configure store for typescript
export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, any, Action>;
}

// Define a type of a thunk result that is
// basically a thnukAction with an AppState custom state
export type ThunkResult<R> = ThunkAction<R, AppState, any, Action>;

// Define a particular shape of action containing
// a payload that can be a product or list of cities
export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

// Define possible actions shapes
export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload?: P): ActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

// To add custom CreateAction in action types
type FunctionType = (...args: any[]) => any
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };


export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;