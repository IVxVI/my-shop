import React from "react";
import { Product } from "../Types/Product";

type Props = {
  orderPrice?: number,
  cartProducts?: Product[],
  setCartProducts?: (arg: number | Product[]) => void,
  productList?: Product[],
  setProductList?: (arg: Product[]) => void,
  wishlist?: Product[], 
  setWishlist?: (arg: Product[]) => void,
  sidebarProducts?: Product[], 
  setSidebarProducts?: (arg: Product[]) => void,
  notification?: string,
  setNotification?: (arg: string) => void
}

const StoreContext = React.createContext<Props>({});

export default StoreContext;