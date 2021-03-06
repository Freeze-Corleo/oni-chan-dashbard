import {
  Action, applyMiddleware, combineReducers, createStore, Store,
} from 'redux';
import thunk, { ThunkAction, ThunkDispatch, ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState } from './appState';

import { productReducer as product} from './core-logic/reducers/productReducer';
import { notificationReducer as notification } from './core-logic/reducers/notificationReducer';
import { myUserReducer as myUser } from './core-logic/reducers/myUserReducer';
import {basketReducer as basket} from './core-logic/reducers/basketReducer'
import { userReducer as user } from './core-logic/reducers/userReducer';
import { partnerReducer as partner } from './core-logic/reducers/partnerReducer';
import { restaurantReducer as restaurant } from './core-logic/reducers/restaurantReducer';
import { categoryReducer as category } from './core-logic/reducers/categoryReducer';
import { commandReducer as command } from './core-logic/reducers/commandReducer';

import { ProductGateway } from './secondary-adapters/products/productGateway';
import { AuthenticationGateway } from './secondary-adapters/auth/authGateway';
import { UserGateway } from './secondary-adapters/users/userGateway';
import { PartnerGateway } from './secondary-adapters/partners/partnerGateway';
import { RestaurantGateway } from './secondary-adapters/restaurant/restaurantGateway';
import { CategoryGateway } from './secondary-adapters/products/categoryGateway';
import { CommandGateway } from './secondary-adapters/command/commandGateway';

export interface Dependencies {
  restaurantGateway: RestaurantGateway;
  productGateway: ProductGateway;
  authGateway: AuthenticationGateway;
  userGateway: UserGateway;
  partnerGateway: PartnerGateway;
  categoryGateway: CategoryGateway;
  commandGateway: CommandGateway;
}

// custom combine store to implmenent it with middlewares that will be used in actions
export const configureStore = (dependencies: Partial<Dependencies>): ReduxStore => createStore(
  combineReducers({
    product,
    notification,
    myUser,
    basket,
    user,
    partner,
    restaurant,
    category,
    command
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