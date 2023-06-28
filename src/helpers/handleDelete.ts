import { Product } from "../Types/Product";

export const handleDelete = (
    id: number, 
    products: Product[], 
    setProducts: (arg: Product[]) => void
  ) => {
  const updatedStorage = products.filter((product: Product) => {
    return product.id !== id;
  });
  
  setProducts(updatedStorage);
}