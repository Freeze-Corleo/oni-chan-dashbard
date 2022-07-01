import axiosConfig from "../../helpers/api.helpers";

import { IUser } from '../../../appState';
import { eraseJwtHeader } from "../../helpers/api.helpers";

// Service function for registering
export const getUserById = async (_uuid: string) => {
  let response = null;
  let error = null;

  try {
    response = await axiosConfig.get(`/big-mom/user/get/${_uuid}`);
  } catch (err) {
    error = err;
  }

  return {response, error};
}

export const updateUser = async (_uuid: string, _userUpdated: IUser) => {
  let response = null;
  let error = null;

  try {
    response = await axiosConfig.put(`/big-mom/user/update/${_uuid}`, {..._userUpdated});
  } catch (err) {
    error = err;
  }

  return {response, error};
}

export const logout = async() => {
  let response = null;
  let error = null;

  try {
    response = await axiosConfig.post(`/big-mom/auth/logout`);
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
    response = await axiosConfig.delete(`/big-mom/user/delete`, { params: { id: _uuid } });
  } catch (err) {
    error = err;
  }
  return {response, error};

}