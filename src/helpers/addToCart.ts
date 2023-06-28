import { Product } from "../Types/Product";
import { hasProduct } from "./hasProduct";

const addToStorage = (
  id: number, 
  products: Product[], 
  storage: Product[],
  setProducts: (arg: Product[]) => void
) => {
  const productToAdd = products.find((product: Product) => product.id === id);

  if (hasProduct(storage, productToAdd.id)) {
    const updatedCartProducts = storage.map((product: Product) => {
      if (product.id === productToAdd.id && product.qty) {
        return { ...product, qty: product.qty + 1 };
      }
      return product;
    });

    setProducts(updatedCartProducts);
  } else if (productToAdd) {
    setProducts([...storage, {...productToAdd, qty: 1}]);
  }
}

export default addToStorage;