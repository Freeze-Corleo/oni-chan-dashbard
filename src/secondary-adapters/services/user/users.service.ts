import axiosConfig, { initializeJwtHeader } from "../../helpers/api.helpers";
import { IUserRegister, IUserLogin, IMyProfil } from '../../../appState';


// Service function for registering
export const getUserById = async (_uuid: string) => {
  let response = null;
  let error = null;

  try {
    response = await axiosConfig.post(`/oni-chan/auth/register`);
  } catch (err) {
    error = err;
  }

  return {response, error};
}