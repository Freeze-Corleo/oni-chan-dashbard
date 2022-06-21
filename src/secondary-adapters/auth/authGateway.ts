import { IUserRegister, IUserLogin, IMyProfil } from "../../appState";

import { IAuthenticationGateway } from '../../core-logic/gateways/authenticationGateway';

import * as auth from '../services/auth/auth.service';



export class AuthenticationGateway implements IAuthenticationGateway {
  public async register(_infos: IUserRegister): Promise<{response: any, error: any}>{
    return auth.register(_infos);
  }

  public async login(_credentials: IUserLogin): Promise<{response: any, error: any, jwtDecoded: IMyProfil | null}>{
    return auth.login(_credentials);
  }

  public async validateCode(_id: string, _code: string): Promise<{response: any, error: any, jwtDecoded: IMyProfil | null}> {
    return await auth.validateEmail(_id, _code);
  }
}