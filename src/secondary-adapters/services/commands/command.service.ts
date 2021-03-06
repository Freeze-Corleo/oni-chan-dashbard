import axiosConfig from "../../helpers/api.helpers";
import { ICommandCreate } from '../../../appState';
import axios from "axios";

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

export const retrieveCommandsFromRestaurant = async (_id: string) => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.get(`/oni-chan/command/by-restaurant/${_id}`);
    response = response.data;
  } catch(err) {
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

 export const updateCommand = async (_commandId: string, state: string, deliveryId: string) => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.put(`/oni-chan/command/update/${_commandId}`, {state, deliveryId});
    console.log(response);
  } catch (err) {
    error = err;
  }

  return {response, error};
 }

export const getHistoCommandByUser = async (_id: string, person: string) => {
  let response: any;
  let error: any = null;
  try {
    response = await axiosConfig.post(`/oni-chan/command/history/user/`+_id, {status: person});
  } catch (err) {
    error = err;
  }
  return {response, error};
}

export const deleteCommand = async (_id: string) => {

  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.delete(`/oni-chan/command/delete/${_id}`);
  } catch (err) {
    error = err;
  }

  return {response, error};
}