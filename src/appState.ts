
/**
 * global redux App state
 */
export interface AppState {
  product: {
    isLoading: boolean;
    data: IProduct | null;
  }
}

/**
 * Product interface flow
 */

// A product can be either a basic product
// like a hamburger or a complete menu
export interface IProduct {
  title: string;
  price: string;
  itemDescription?: string;
  category: ICategoryProduct;
  imageUrl: string;
  customizationsList: ICustomization[];
  alleric: IAllergic[];
}

// allergy labels to be add dynamically
export interface IAllergic {
  title: string;
}

// Can be pizza category or "Entrée" or whatever
export interface ICategoryProduct {
  title: string;
}

// If single product, options will be null
export interface ICustomization {
  maxPermitted?: number;
  minPermitted?: number;
  minPermittedUnique?: number;
  maxPermittedUnique?: number;
  title: string;
  options: ICustomizationItem[]
}

// In the case a Product model is a menu
// CustomizationItem can be ice choice if
// coca is Cutomazition
export interface ICustomizationItem {
  defaultQuantitty: number;
  minPermitted: number;
  maxPermitted: number;
  price: number;
  title: string;
  isSoldOut: boolean;
}

/**
 * Auth interface for authentication
 * process
 */
export interface IUserRegister {
  email: string;
  address: string;
  password: string;
  zipCode: string;
  city: string;
  browser: string;
  status: string;
  phone: string;
}

export interface IUserLogin {
  email: string;
  passowrd: string
}