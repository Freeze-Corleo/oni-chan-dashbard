import { ICategoryCreate } from "../../appState"

export interface ICategoryGateway {
  createCategory(_categoryData: ICategoryCreate): Promise<{response: ICategoryCreate, error: any}>;
  retrieveCategories(_restaurantId: string): Promise<{response: ICategoryCreate[], error: any}>;
}