import { IProductCreate, IProduct, ICustomizationCreate } from "../../appState";
import { IProductGateway } from "../../core-logic/gateways/productGateway";
import * as product from '../services/products/products.service';

export class ProductGateway implements IProductGateway {
  public async retrieveOne(_id: string): Promise<IProduct | null> {
    throw new Error("Method not implemented.");
  }
  public async create(_customizations: ICustomizationCreate[], _product: IProductCreate, _restaurantId: string, _categoryId: string): Promise<{response: any, error: any}> {
    return await product.createProduct(_customizations, _product, _restaurantId, _categoryId);
  }
  public async update(_id: string, _product: IProduct): Promise<{product: IProduct | null, message: string}> {
    throw new Error("Method not implemented.");
  }
  public async delete(_id: string, _restaurantId: string): Promise<{response: any, error: any}> {
    return await product.deleteAProduct(_id, _restaurantId);
  }
  public async retrieveByCategory(_categoryId: string): Promise<{response: any, error: any }> {
    return await product.getProductsByCategory(_categoryId);
  }
}