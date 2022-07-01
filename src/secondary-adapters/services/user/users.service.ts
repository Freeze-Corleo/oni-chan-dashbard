import axiosConfig from "../../helpers/api.helpers";

import { IUser } from '../../../appState';
import { eraseJwtHeader } from "../../helpers/api.helpers";

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

export const logout = async() => {
  let response = null;
  let error = null;

  try {
    response = await axiosConfig.post(`/oni-chan/auth/logout`);
    eraseJwtHeader('FREEZE_JWT');
  } catch (err) {
    error = err;
  }
  return {response, error};

}

export const deleteAccount = async(_uuid: string) => {
  let response = null;
  let error = null;

  try {
    response = await axiosConfig.delete(`/oni-chan/user/delete`, { params: { id: _uuid } });
  } catch (err) {
    error = err;
  }
  return {response, error};

}