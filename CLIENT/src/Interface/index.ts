import { AppDispatch } from "../store";

export type ProductType = {
  state?: any;
  dispatch?: AppDispatch;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
  token?: string;
};

interface IComments {
  id: number;
  comment: string;
  idUser: string;
  nameUser: string;
}
export interface IBrand {
  id: number;
  title: string;
}
export interface ICategory {
  id: number;
  title: string;
}
export interface ISize {
  id: number;
  percent: number;
  size: string;
}
export interface IProduct {
  id: number;
  title: string;
  brand: string;
  size: string;
  category: string;
  stock: number;
  price: number;
  images: [];
  description: string;
}
export interface IStateProduct {
  products: IProduct[];
}
export interface ICartProduct {
  oderQty: number;
  idUser: number;
  idClick: number;
  id: number;
  brand: string;
  name: string;
  category: string;
  images: [];
  provider: string;
  quantity: number;
  comments: IComments[];
  price: number;
  origin: string;
  discount: number;
  rating: number;
  isDealFragrant: boolean;
  isMini: boolean;
  isNew: boolean;
  isBestSeller: boolean;
  description: string;
}
export interface IVisa {
  id: number;
  code: string;
  name: string;
  cvc: number;
  cardNumber: Number;
  issuer: string;
  isActive: boolean;
}
export interface IUser {
  id: number;
  email: string;
  password: string;
  avatar: string;
  role: string;
  status: boolean;
  phone: string;
}
export interface IUserState {
  users: IUser[];
  userDetail: IUser;
}
export interface IBank {
  id: number;
  name: string;
  code: string;
  type: string;
  exp: string;
  cvc: number;
  wallet: number;
}
export interface IOder {
  id: number;
  name: string;
  userId: number;
  address: string;
  phone: string;
  cartOrders: IProduct[];
  date: Date;
  codeOrder: number;
  status: string;
}

export interface Iimage {
  id: number;
  file: IimageFile;
}
export interface IimageFile {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
  length: number;
}
