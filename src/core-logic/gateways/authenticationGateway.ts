import { IUserRegister, IUserLogin, IMyProfil } from '../../appState';

/**
 * Interface for Authentication gateway that will be used to
 * use Authentication gateway method in
 * /secondary-adapters/auth
 */
export interface IAuthenticationGateway {
  register(_infos: IUserRegister): Promise<{response: any, error: any}>;
  login(_credentials: IUserLogin): Promise<{response: any, error: any, jwtDecoded: IMyProfil | null}>;
  validateCode(_id: string, _code: string): Promise<{response: any, error: any, jwtDecoded: IMyProfil | null}>;
}