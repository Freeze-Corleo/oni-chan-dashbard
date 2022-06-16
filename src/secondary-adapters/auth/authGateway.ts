import { IUserRegister, IUserLogin } from "../../appState";

import * as auth from '../services/auth/auth.service';


export class AuthenticationGateway {
  public async register(_infos: IUserRegister): Promise<void>{
    await auth.register(_infos);
  }

  public async login(_credentials: IUserLogin): Promise<void>{
    await auth.login(_credentials);
  }

  public async validateCode(_id: string, _code: string): Promise<void> {
    await auth.validateEmail(_id, _code);
  }
}