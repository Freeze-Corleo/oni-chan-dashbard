import { ICommandCreate } from "../../appState"

export interface ICommandGateway {
  createCommandClient(_command: ICommandCreate): Promise<{response: any, error: any}>,
  // retrieveHistoryCommands(_restaurantId: string): Promise<{response: any, error: any}>,
  // retrieveCommandsRestorer(_restaurantId: string): Promise<{response: any, error: any}>,
  // retrieveCommandsNoAcceptedDeliver(): Promise<{response: any, error: any}>,
  // retrieveCommandAcceptedDeliver(_deliver: string): Promise<{response: any, error: any}>,
}