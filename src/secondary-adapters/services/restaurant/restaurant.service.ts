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

export const getRestaurantByID = async (id: string | undefined) => {
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
    _id: '',
    imageUrl: '',
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

export const deleteRestaurant = async (_id: string | undefined) => {
  let error: any = null;
 
  try {
   await axiosConfig.delete(`/oni-chan/restaurant/delete/` + _id);
  } catch (err) {
    error = err;
  }

  return "Restaurant deleted";
}

<<<<<<< HEAD
export const getStatisticsById = async (_userId: string) => {
  let response: any = null;
  let error = null;
  try {
    response = await axiosConfig.get(`/oni-chan/restaurant/statistics`, { params: { id: _userId } });
  } catch (err) {
    error = err;
  }

  return {response, error};
=======
export const updateRestaurant = async (id: string | undefined, _restaurant: IRestaurant) => {
  let response: IRestaurant;
  let error: any = null;
  let message: string = 'Restaurant updated';
  let restaurant: IRestaurant = {
    name: '',
    rate: 0,
    deliveryPrice: 0,
    address: "",
    price: 0,
    cookType: '',
    isAvailable: true,
    _id: '',
    imageUrl: '',
  };
  try {
    response = await axiosConfig.put(`/oni-chan/restaurant/update/` + id, {restaurant: _restaurant});
    restaurant = response;
  } catch (err) {
    error = err;
  }
  return {restaurant, message};
>>>>>>> a1c6256e6bd2b061ffe8219a0a21b6044a2c6913
}