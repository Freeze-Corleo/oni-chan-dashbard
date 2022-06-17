import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';

import createToast from '../../../helpers/toast-factory';

// Action for notification displaying
export const displayToastNotification = (options: {}): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  dispatch(actionCreator.Actions.addToast(createToast(options)));
}

// Action for notification removal
export const removeToastNotification =  (id: string): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  dispatch(actionCreator.Actions.removeToast(id));
}
