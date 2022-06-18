import { IProduct } from "../../appState";
import { IProductGateway } from "../../core-logic/gateways/productGateway";
import * as product from '../services/products/products.service';

export class ProductGateway implements IProductGateway {
  public async retrieveOne(_id: string): Promise<IProduct | null> {
    throw new Error("Method not implemented.");
  }
  public async create(_product: IProduct): Promise<string | null> {
    throw new Error("Method not implemented.");
  }
  public async update(_id: string, _product: IProduct): Promise<{product: IProduct | null, message: string}> {
    throw new Error("Method not implemented.");
  }
  public async delete(_id: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  public async retrieve(): Promise<{response: IProduct[] | null, error: any }> {
    return await product.getAllProducts();
  }
}