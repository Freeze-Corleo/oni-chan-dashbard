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
  