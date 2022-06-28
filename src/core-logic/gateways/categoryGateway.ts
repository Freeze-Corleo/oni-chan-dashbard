import { ICategoryCreate } from "../../appState"

export interface ICategoryGateway {
  createCategory(_categoryData: ICategoryCreate): Promise<{response: ICategoryCreate, error: any}>;
  retrieveCategories(): Promise<{response: ICategoryCreate[], error: any}>;
}