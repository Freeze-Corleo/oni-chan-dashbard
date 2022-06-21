import axiosConfig from "../../helpers/api.helpers";
import { IProduct } from '../../../appState';

export const getUserById = async () => {
    let response: any;
    
    let error = null;
  
    try {
      response = await axiosConfig.get('/oni-chan/user/get?id=778');
    } catch (err) {
      error = err;
    }
  
    return {response, error};
  }