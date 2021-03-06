import axiosConfig, { initializeJwtHeader } from "../../helpers/api.helpers";
import { IUserRegister, IUserLogin, IMyProfil } from '../../../appState';
import jwtDecode from 'jwt-decode';


// Service function for registering
export const register = async (_user: IUserRegister) => {
  let response = null;
  let error = null;

  try {
    response = await axiosConfig.post(`/oni-chan/auth/register`, {..._user});
  } catch (err) {
    error = err;
  }

  return {response, error};
}

// Service function for login
export const login = async (_credentials: IUserLogin) => {
  let response = null;
  let error = null;
  let jwtDecoded: IMyProfil | null = null;
  try {
    response = await axiosConfig.post(`/oni-chan/auth/login`, {..._credentials});
    initializeJwtHeader(response.data.token);
    jwtDecoded = jwtDecode(response.data.token);
  } catch (err) {
    error = err;
  }
  return {response, error, jwtDecoded};
}

export const validateEmail = async (_id: string, _code: string) => {
  let response = null;
  let error = null;
  let jwtDecoded: IMyProfil | null = null;
  try {
    response = await axiosConfig.get(`/oni-chan/auth/verify/${_id}/${_code}`);
    initializeJwtHeader(response.data.token);
    jwtDecoded = jwtDecode(response.data.token);
  } catch(err) {
    error = err;
  }

  return {response, error, jwtDecoded};
}