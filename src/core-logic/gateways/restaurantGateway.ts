import { IRestaurant } from '../../appState';

/**
 * Interface for Restaurant gateway that will be used to
 * use Restaurant gateway method in
 * /secondary-adapters/restaurant
 */
export interface IRestaurantGateway {
  retrieve(): Promise<{response: IRestaurant[] | null, error: any }>;
  retrieveOne(_id: string): Promise<IRestaurant | null>;
  create(_restaurant: IRestaurant): Promise<string | null>;
  update(_id: string, _restaurant: IRestaurant): Promise<{restaurant: IRestaurant | null, message: string}>;
  delete(_id: string): Promise<string>
}