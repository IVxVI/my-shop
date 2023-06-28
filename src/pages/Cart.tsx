import { useContext } from 'react';
import ProductList from '../components/ProductList/ProductList';
import StoreContext from '../helpers/StoreContext';
import '../styles/page.scss';


export default function Cart() {
  const { cartProducts } = useContext(StoreContext);

  return (
    <div className="page">
      {cartProducts?.length === 0 ? (
        <h1>You haven`t added any products! Please, return to shop</h1>
      ) : (
        <ProductList />
      )}
    </div>
  )
}