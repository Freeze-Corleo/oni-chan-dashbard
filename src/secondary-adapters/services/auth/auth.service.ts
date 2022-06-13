import axiosConfig from "../../helpers/api.helpers";
import { IUserRegister, IUserLogin } from '../../../appState';

// Service function for registering
export const register = async (_user: IUserRegister) => {
  let response = null;
  let error = null;

  try {
    response = await axiosConfig.post(`/oni-chan/auth/register`, {_user});
  } catch (err) {
    error = err;
  }

  return {response, error};
}

// Service function for login
export const login = async (_credentials: IUserLogin) => {
  let response = null;
  let error = null;

  try {
    response = await axiosConfig.post(`/oni-chan/auth/login`, {_credentials});
  } catch (err) {
    error = err;
  }

  return {response, error};
}

export const validateEmail = async (_id: string, _code: string) => {
  let response = null;
  let error = null;

  try {
    response = await axiosConfig.post(`/oni-chan/auth/verify/${_id}/${_code}`);
  } catch(err) {
    error = err;
  }

  return {response, error};
}