import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';

// Action for notification displaying
export const dispatchAddProduct = (options: {}): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  dispatch(actionCreator.Actions.addProduct(options));
}

// Action for notification removal
export const dispatchRemoveProduct =  (id: string): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  dispatch(actionCreator.Actions.removeProduct(id));
}
