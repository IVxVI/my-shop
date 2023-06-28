import { Product } from "../Types/Product";

export const hasProduct = (products: Product[], id: number) => {
  return products.find(product => product.id === id);
}