import { IUser } from '../../appState';
import { IUserGateway } from '../../core-logic/gateways/userGateway';

import { getUserById, updateUser } from '../services/user/users.service';

export class UserGateway implements IUserGateway {

  async getUserById(_uuid: string): Promise<{response: any, error: any}> {
    return getUserById(_uuid);
  }

  async updateUser(_uuid: string, _userUpdated: IUser): Promise<{response: any, error: any}> {
    return updateUser(_uuid, _userUpdated);
  }

  async deleteUserById(_uuid: string): Promise<{ response: any; error: any; }> {
    throw new Error('Method not implemented.');
  }
}