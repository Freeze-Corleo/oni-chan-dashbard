import { IRestaurant, IAddress } from "../../appState";
import { IRestaurantGateway } from "../../core-logic/gateways/restaurantGateway";
import * as restaurant from '../services/restaurant/restaurant.service';

export class RestaurantGateway implements IRestaurantGateway {
  public async retrieveOne(_id: string): Promise<IRestaurant | null> {
    return await restaurant.getRestaurantByID(_id);
  }
  public async create(_restaurant: IRestaurant, _address: IAddress, _restorerId: string): Promise<{response: any, error: any}> {
    return await restaurant.createRestaurant(_restaurant, _address, _restorerId);
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

  public async retrieveByPartner(_userId: string): Promise<{response: any, error: any}> {
    return await restaurant.getAllRestaurantsByPartner(_userId);
  }
}