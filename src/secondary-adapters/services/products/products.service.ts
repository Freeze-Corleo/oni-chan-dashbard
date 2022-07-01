import axiosConfig from "../../helpers/api.helpers";
import { IProduct, IProductCreate, ICustomizationCreate } from '../../../appState';

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


export const deleteAProduct = async (_productId: string, _restaurantId: string) => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.delete(`/oni-chan/product/delete-product/${_productId}/${_restaurantId}`);
    response = response.data;
  } catch (err) {
    error = err;
  }

  return {response, error};
}

export const createProduct = async (_customizations: ICustomizationCreate[], _product: IProductCreate, _restaurantId: string, _categoryId: string) => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.post(`/oni-chan/product/create-product/${_restaurantId}`, {product: _product, customizations: _customizations, categoryId: _categoryId});
    response = response.data;
  } catch (err) {
    error = err;
  }

  return {response, error};
}

export const getProductsByCategory = async (_categoryId: string) => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.get(`/oni-chan/product/get-all/category/${_categoryId}`);
    response = response.data;
  } catch (err) {
    error = err;
  }

  return {response, error};
}


export const createCategoryProduct = async (title: string, restaurantId: string) => {
  let response: any;
  let error: any = null;
  try {
    response = await axiosConfig.post(`/oni-chan/category-product/create`,{title, restaurantId});
    response = response.data;
  } catch (err) {
    error = err;
  }

  return {response, error};
}

export const getCategoriesProduct = async (_restaurantId: string) => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.get(`/oni-chan/category-product/get-all/${_restaurantId}`);
    response = response.data;
  } catch (err) {
    error = err;
  }

  return {response, error};
}