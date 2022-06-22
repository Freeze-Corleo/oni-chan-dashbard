import axiosConfig from "../../helpers/api.helpers";

import { IUser } from '../../../appState';

// Service function for registering
export const getUserById = async (_uuid: string) => {
  let response = null;
  let error = null;

  try {
    response = await axiosConfig.get(`/oni-chan/user/get/${_uuid}`);
  } catch (err) {
    error = err;
  }

  return {response, error};
}

export const updateUser = async (_uuid: string, _userUpdated: IUser) => {
  let response = null;
  let error = null;

  try {
    response = await axiosConfig.put(`/oni-chan/user/update/${_uuid}`, {..._userUpdated});
  } catch (err) {
    error = err;
  }

  return {response, error};
}