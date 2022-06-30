
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
    data: IProduct[] | null;
  },
  notification: {
    isLoading: boolean;
    data: {}&{id:number}[] | null
  },
  basket: {
    isLoading: boolean;
    data: {restoId: string, qteTotal: number, totalPrice: number, restaurantName: string, products: {qte: number, product: IProduct}[]} | null;
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
    data: IRestaurantRetrieve[] | null;
  },
  command: {
    isLoading: boolean;
    data: ICommand[] | null;
  },
  category: {
    isLoading: boolean;
    data: ICategoryRetrieved[] | null;
  },
}

/**
 * Product interface flow
 */

export interface IProductCreate {
  imageUrl: string;
  itemDescription: string;
  price: string;
  title: string;
}

export interface ICustomizationCreate {
  title: string;
  minPermitted: string;
  maxPermitted: string;
}

// A product can be either a basic product
// like a hamburger or a complete menu
export interface IProduct {
  title: string;
  price: string;
  itemDescription?: string;
  category: string;
  imageUrl: string;
  customizationsList: ICustomization[];
  _id: string;
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
  address: string;
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
  imageUrl: string;
}

export interface IRestaurantRetrieve {
  name: string;
  rate: number;
  deliveryPrice: number;
  address: string;
  city: string;
  zipCode: string;
  price: number;
  cookType: string;
  isAvailable: boolean;
  _id: string;
  imageUrl: string;
}

// CategoryProducts

export interface ICategoryRetrieved extends ICategoryCreate {
  _id: string;
}

export interface ICategoryCreate extends ICategory {
  restaurantId: string
}

export interface ICategory {
  title: string;
}

export interface ICommandCreate {
  price: number;
  products: string[];
  restaurantId: string;
  address: string
  delivery: string;
  userId: string;
  isAccepted: boolean;
  isReceived: boolean;
  deleted: boolean;
}

export interface ICommand {
  price: number;
  products: IProduct[];
  restaurantId: IRestaurant;
  address: string;
  city: string;
  zipCode: string;
  delivery: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  isAccepted: boolean;
  isReceived: boolean;
  deleted: boolean;
  uuid: string;
  _id: string;
}