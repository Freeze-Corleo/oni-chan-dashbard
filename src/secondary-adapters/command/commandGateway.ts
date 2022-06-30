import {ICommandCreate } from "../../appState";
import { ICommandGateway } from "../../core-logic/gateways/commandGateway";
import * as partner from '../services/partners/partner.service';

export class CommandGateway implements ICommandGateway {

  public async createCommandClient(_command: ICommandCreate): Promise<{response: any, error: any}> {
    return partner.getAllPartners();
  }
}