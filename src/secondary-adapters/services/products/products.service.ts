import axiosConfig from "../../helpers/api.helpers";
import { IProduct } from '../../../appState';

// Service function for registering
export const getAllProducts = async () => {
  let response: IProduct[] | null = null;
  let error = null;

  try {
    response = await axiosConfig.get(`/oni-chan/product/get-all`);
  } catch (err) {
    error = err;
  }

  return {response, error};
}
