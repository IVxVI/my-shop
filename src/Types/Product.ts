import { Categories } from "./Categories"

export type Product = {
  id: number,
  title: string,
  imgUrl: string,
  description: string,
  category: Categories | string,
  price: number,
  availability: boolean
  qty?: number;
}