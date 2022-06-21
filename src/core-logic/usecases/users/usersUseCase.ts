import { ThunkResult } from '../../../store';
import * as actionCreator from './actionCreator';

import { IUserGateway } from '../../gateways/userGateway';


// Action for notification displaying
export const retrieveSpecificUser = (_uuid: string): ThunkResult<Promise<void>> => async (dispatch, getState, {userGateway}: {userGateway: IUserGateway}) => {
  dispatch(actionCreator.Actions.retrieveSpecificUser);
  const user = await (await userGateway.getUserById(_uuid)).response.data;
  dispatch(actionCreator.Actions.specificUserRetrieved(user));
}