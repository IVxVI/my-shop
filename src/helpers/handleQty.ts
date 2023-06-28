import { Product } from "../Types/Product";

export const handleQty = (
  products: Product[], 
  setProducts: (arg: Product[]) => void, 
  id: number, 
  action: string
) => {
  const updatedProducts = products.map((product: Product) => {
    if(product.id === id && action === 'increment' && product.qty) {
      return {...product, qty: product.qty += 1}
    } else if (product.id === id && action === 'decrement' && product.qty) {
      return {...product, qty: product.qty -= 1}
    }

    return product;
  });

  setProducts(updatedProducts)
}