import { IAddress, IRestaurant } from "../../../appState";
import axiosConfig from "../../helpers/api.helpers";

export const getAllRestaurants = async () => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.get(`/oni-chan/restaurant/get-all`);
    console.log(response);
  } catch (err) {
    error = err;
  }

  return {response, error};
}

export const getRestaurantByID = async (id: string) => {
  let response: IRestaurant;
  let error: any = null;
  let restaurant: IRestaurant = {
    name: '',
    rate: 0,
    deliveryPrice: 0,
    address: "",
    price: 0,
    cookType: '',
    isAvailable: true,
    _id: ''
  };

  try {
    response = await axiosConfig.get(`/oni-chan/restaurant/get/` + id);
    restaurant = response;
  } catch (err) {
    error = err;
  }

  return restaurant;
}

export const createRestaurant = async (_restaurant: IRestaurant, _address: IAddress, _restorerId: string) => {
  let response = null;
  let error = null;
  try {
    response = await axiosConfig.post(`/oni-chan/restaurant/create/${_restorerId}`, {restaurant: _restaurant, address:_address});
  } catch (err) {
    error = err;
  }
  return {response, error};
}

export const getAllRestaurantsByPartner = async (_userId: string) => {
  let response: any = null;
  let error = null;
  try {
    response = await axiosConfig.get(`/oni-chan/restaurant/get-all/partner/${_userId}`);
  } catch (err) {
    error = err;
  }
  return {response, error};
}