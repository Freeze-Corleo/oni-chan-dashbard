import { IProduct } from '../../appState';

/**
 * Interface for Product gateway that will be used to
 * use Product gateway method in
 * /secondary-adapters/product
 */
export interface IProductGateway {
  retrieve(): Promise<IProduct[] | null>;
  retrieveOne(_id: string): Promise<IProduct | null>;
  create(_product: IProduct): Promise<string | null>;
  update(_id: string, _product: IProduct): Promise<{product: IProduct | null, message: string}>;
  delete(_id: string): Promise<string>
}