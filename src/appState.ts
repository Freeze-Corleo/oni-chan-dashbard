
/**
 * global redux App state
 */
export interface AppState {
  myUser: {
    isLoading: boolean;
    data: IMyProfil
  },
  product: {
    isLoading: boolean;
    data: IProduct | null;
  },
  notification: {
    isLoading: boolean;
    data: {}&{id:number}[] | null
  },
  basket: {
    isLoading: boolean;
    data: {}&{id:string, price: number, img: string, name: string}[] | null
  },
  user: {
    isLoading: boolean;
    data: IUser | null;
  },
  partner: {
    isLoading: boolean;
    data: IPartner[] | null;
  },
  restaurant: {
    isLoading: boolean;
    data: IRestaurant[] | null;
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
  password: string
}

/**
 * User profil for authenticated datas
 */
export interface IMyProfil {
  email: string;
  phone: string;
  verifyUser: string;
  status: string;
  profilUrl: string;
  uuid: string;
  firstname: string;
  lastname: string;
}

export interface IAddress{
  street:string;
  number:string;
  city:string;
  zipCode:string;
  uuid?:string;
  User?:IUser;
  userId?:string;
}

export interface IUser {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  address: IAddress[] | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  googleAuth: boolean | null;
  verifyUser: boolean | null;
  status: string;
  godFather: string;
  profilUrl: string;
  isBanned: boolean;
  uuid: string;
}

export interface IPartnerRegister {
  name: string;
  address: string;
  zipCode: string;
  city: string;
  siren: string;
  activity: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  status: string;
}

export interface IPartnerApply {
  id: string;
  password?: string;
  status: string;
}

export interface IPartner {
  name: string;
  address: IAddress;
  siren: string;
  activity: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  status: string;
  updatedAt: Date;
  createdAt: Date;
  _id: string
}

export interface IRestaurant {
  name: string;
  rate: number;
  deliveryPrice: number;
  address: string;
  price: Number;
  cookType: string;
  isAvailable: boolean;
  _id: string;
}

// CategoryProducts

export interface ICategoryCreate extends ICategory {
  restaurantId: string
}

export interface ICategory {
  title: string;
}