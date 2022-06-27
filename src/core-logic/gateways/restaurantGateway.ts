import { IRestaurant, IAddress } from '../../appState';

/**
 * Interface for Restaurant gateway that will be used to
 * use Restaurant gateway method in
 * /secondary-adapters/restaurant
 */
export interface IRestaurantGateway {
  retrieve(): Promise<{response: IRestaurant[] | null, error: any }>;
  retrieveOne(_id: string): Promise<IRestaurant | null>;
  create(_restaurant: IRestaurant, _address: IAddress, _restorerId: string): Promise<{response: any, error: any}>;
  update(_id: string, _restaurant: IRestaurant): Promise<{restaurant: IRestaurant | null, message: string}>;
  delete(_id: string): Promise<string>;
  retrieveByPartner(_userId: string): Promise<{response: any, error: any}>;
}