import {ICommand, ICommandCreate } from "../../appState";
import { ICommandGateway } from "../../core-logic/gateways/commandGateway";
import * as command from '../services/commands/command.service';

export class CommandGateway implements ICommandGateway {

  public async createCommandClient(_command: ICommandCreate): Promise<{response: any, error: any}> {
    return command.createCommand(_command);
  }

  public async retrieveRestorerCommands(_restaurantId: string): Promise<{response: any, error: any}> {
    return command.retrieveCommandsFromRestaurant(_restaurantId);
  }

  public async retrieve(): Promise<{response: ICommand[] | null, error: any }> {
    return await command.getAllCommands();
  }

  public async retrieveHistoryCommands(_id: string, person: string): Promise<{response: ICommand[] | null, error: any }> {
    return await command.getHistoCommandByUser(_id, person);
  }
  public async deleteCommand(_id: string): Promise<{response: any, error: any}> {
    return await command.deleteCommand(_id);
  }

  public async updateCommand(_commandId: string, state: string, deliveryId: string): Promise<{response: any, error: any}> {
    return await command.updateCommand(_commandId, state, deliveryId);
  }
}