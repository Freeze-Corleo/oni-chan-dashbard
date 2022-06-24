import { IRestaurant } from "../../appState";
import { IRestaurantGateway } from "../../core-logic/gateways/restaurantGateway";
import * as restaurant from '../services/restaurant/restaurant.service';

export class RestaurantGateway implements IRestaurantGateway {
  public async retrieveOne(_id: string): Promise<IRestaurant | null> {
    return await restaurant.getRestaurantByID(_id);
  }
  public async create(_restaurant: IRestaurant): Promise<string | null> {
    throw new Error("Method not implemented.");
  }
  public async update(_id: string, _restaurant: IRestaurant): Promise<{restaurant: IRestaurant | null, message: string}> {
    throw new Error("Method not implemented.");
  }
  public async delete(_id: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  public async retrieve(): Promise<{response: IRestaurant[] | null, error: any }> {
    return await restaurant.getAllRestaurants();
  }
}