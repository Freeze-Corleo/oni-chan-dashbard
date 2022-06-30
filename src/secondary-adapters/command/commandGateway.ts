import {ICommandCreate } from "../../appState";
import { ICommandGateway } from "../../core-logic/gateways/commandGateway";
import * as command from '../services/commands/command.service';

export class CommandGateway implements ICommandGateway {

  public async createCommandClient(_command: ICommandCreate): Promise<{response: any, error: any}> {
    return command.createCommand(_command);
  }
}