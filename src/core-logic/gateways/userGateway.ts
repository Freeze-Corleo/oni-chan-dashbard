import { IUser } from '../../appState';

/**
 * Interface for user gateway class
 */
export interface IUserGateway {
  getUserById(_uuid: string): Promise<{response: any, error: any}>
}