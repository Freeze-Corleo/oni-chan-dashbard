import axiosConfig from "../../helpers/api.helpers";
import { IProduct } from '../../../appState';

export const getAllProducts = async () => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.get(`/oni-chan/product/get-all`);
    response = response.data;
  } catch (err) {
    error = err;
  }

  return {response, error};
}
