import { IUserRegister, IUserLogin } from "../../appState";

import * as auth from '../services/auth/auth.service';



export class AuthenticationGateway {
  public async register(_infos: IUserRegister): Promise<{response: any, error: any}>{
    return auth.register(_infos);
  }

  public async login(_credentials: IUserLogin): Promise<{response: any, error: any}>{
    return auth.login(_credentials);
  }

  public async validateCode(_id: string, _code: string): Promise<{response: any, error: any}> {
    return await auth.validateEmail(_id, _code);
  }
}