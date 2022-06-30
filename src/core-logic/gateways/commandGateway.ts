import { ICommand, ICommandCreate } from "../../appState"

export interface ICommandGateway {
  createCommandClient(_command: ICommandCreate): Promise<{response: any, error: any}>,
  retrieve(): Promise<{response: ICommand[] | null, error: any }>;
  retrieveHistoryCommands(_id: string, person: string): Promise<{response: any, error: any}>,
  // retrieveCommandsRestorer(_restaurantId: string): Promise<{response: any, error: any}>,
  // retrieveCommandsNoAcceptedDeliver(): Promise<{response: any, error: any}>,
  // retrieveCommandAcceptedDeliver(_deliver: string): Promise<{response: any, error: any}>,
}