import { IProduct, IProductCreate, ICustomizationCreate } from '../../appState';

/**
 * Interface for Product gateway that will be used to
 * use Product gateway method in
 * /secondary-adapters/product
 */
export interface IProductGateway {
  retrieveByCategory(_categoryId:string): Promise<{response: any, error: any }>;
  retrieveOne(_id: string): Promise<IProduct | null>;
  create(_customizations: ICustomizationCreate[], _product: IProductCreate, _restaurantId: string, _categoryId: string): Promise<{response: any, error: any}>;
  update(_id: string, _product: IProduct): Promise<{product: IProduct | null, message: string}>;
  delete(_id: string): Promise<string>
}