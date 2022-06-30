import axiosConfig from "../../helpers/api.helpers";
import { ICommandCreate } from '../../../appState';

// Service function for registering
export const createCommand = async (_command: ICommandCreate) => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.post(`/oni-chan/command/create`, { command: _command});
    response = response.data;
  } catch (err) {
    error = err;
  }

  return {response, error};
}

export const getAllCommands = async () => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.get(`/oni-chan/command/get-all`);
    console.log(response);
  } catch (err) {
    error = err;
  }

  return {response, error};
}