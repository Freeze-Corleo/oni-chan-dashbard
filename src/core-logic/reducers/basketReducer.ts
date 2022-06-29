import { combineReducers } from "redux";
import * as basketActionCreator from '../usecases/basket/actionCreator';
import * as actions from '../usecases/index';
import { IProduct } from '../../appState';

// Reducer's state will have a type of array of object
// with at least in this object id field
export type IReducerState = {qteTotal: number, totalPrice: number, restaurantName: string, products: {qte: number, product: IProduct}[]};

export type IPayloadBasket = {id: number, product: IProduct, restaurantName: string};

export const data = (
  state: IReducerState = {qteTotal: 0, totalPrice: 0, restaurantName: '', products: []},
  action: basketActionCreator.Actions
) => {
  switch (action.type) {
    case actions.REMOVE_PRODUCT_FROM_BASKET:
      // return state.filter((product) => product.id !== +action.payload);
      return state;
    case actions.ADD_PRODUCT_IN_BASKET:
      const payload = action.payload as IPayloadBasket;
      state.totalPrice += +payload.product.price;
      state.restaurantName = payload.restaurantName;

      if(state.products.length > 0) {
        state.products.forEach((prod) => {
          if(prod.product._id === payload.product._id) {
            prod.qte += 1;
            state.qteTotal += 1;
            return state;
          }
        })

        if(state.products.find((product) => product.product._id === payload.product._id) === undefined) {
          state.qteTotal += 1;
          state.products.push({qte: 1, product: payload.product});
        }
      } else {
        state.qteTotal += 1;
        state.products.push({qte: 1, product: payload.product});
      }

      return state;
    default: return state;
  }
}




const isLoading = () => {
  return false
};

export const basketReducer = combineReducers({
  isLoading,
  data,
});