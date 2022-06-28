import { ActionsUnion, createAction } from '../../../store';
import { ICategoryCreate } from '../../../appState';
import * as _actions from '../index';

// Define the Actions of products to update
// and synchornise the store data
// especially the product data
export const Actions = {
  createCategory: () => createAction(_actions.CREATE_CATEGORY),
  categoryCreated: (_category: ICategoryCreate) => createAction(_actions.CATEGORY_CREATED, _category),
  retrieveCategories: () => createAction(_actions.RETRIEVE_CATEGORIES),
  categoriesRetrieved: (_cats: ICategoryCreate[]) => createAction(_actions.CATEGORIES_RETRIEVED, _cats),
};

export type Actions = ActionsUnion<typeof Actions>;