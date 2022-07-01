import axiosConfig from "../../helpers/api.helpers";
import { ICommandCreate } from '../../../appState';
import axios from "axios";

// Service function for registering
export const createCommand = async (_command: ICommandCreate) => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.post(`/big-mom/command/create`, { command: _command});
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
    response = await axiosConfig.get(`/big-mom/command/by-restaurant/${_id}`);
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
    response = await axiosConfig.get(`/big-mom/command/get-all`);
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
    response = await axiosConfig.put(`/big-mom/command/update/${_commandId}`, {state, deliveryId});
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
    response = await axiosConfig.post(`/big-mom/command/history/user/`+_id, {status: person});
  } catch (err) {
    error = err;
  }
  return {response, error};
}

export const deleteCommand = async (_id: string) => {

  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.delete(`/big-mom/command/delete/${_id}`);
  } catch (err) {
    error = err;
  }

  return {response, error};
}