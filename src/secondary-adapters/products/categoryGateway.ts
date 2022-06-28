import { ICategoryCreate } from '../../appState';
import { ICategoryGateway } from '../../core-logic/gateways/categoryGateway';

import * as category from '../services/products/products.service';


export class CategoryGateway implements ICategoryGateway {
  async createCategory(_categoryData: ICategoryCreate): Promise<{ response: ICategoryCreate; error: any; }> {
    const {response, error} = await category.createCategoryProduct(_categoryData.title, _categoryData.restaurantId);
    return {response, error};
  }
  async retrieveCategories(): Promise<{ response: ICategoryCreate[]; error: any; }> {
    const {response, error} = await category.getCategoriesProduct();

    return {response, error};
  }

}