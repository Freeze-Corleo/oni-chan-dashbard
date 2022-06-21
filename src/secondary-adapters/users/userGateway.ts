import { IUser } from '../../appState';
import { IUserGateway } from '../../core-logic/gateways/userGateway';

import { getUserById } from '../services/user/users.service';

export class UserGateway implements IUserGateway {
  async getUserById(_uuid: string): Promise<{response: any, error: any}> {
    return getUserById(_uuid);
  }
}