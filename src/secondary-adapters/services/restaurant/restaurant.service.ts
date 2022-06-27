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
    let adresse : IAddress = {
      street:'',
      number:'',
      city:'',
      zipCode:'',
    }
    let restaurant: IRestaurant = {
      name: '',
      rate: 0,
      deliveryPrice: 0,
      address: adresse,
      price: 0,
      cookType: '',
      products: [],
      isAvailable: true,
      uuid: "",
    };
  
    try {
      response = await axiosConfig.get(`/oni-chan/restaurant/get-product/?id=` + id);
      restaurant = response;
    } catch (err) {
      error = err;
    }
  
    return restaurant;
  }

  export const createRestaurant = async (_restaurant: IRestaurant) => {
    let error: any = null;
    try {
      await axiosConfig.post(`/oni-chan/restaurant/create`, {..._restaurant});
    } catch (err) {
      error = err;
      return "Error" + error
    }
    return "Validation de la requête";
  }
  