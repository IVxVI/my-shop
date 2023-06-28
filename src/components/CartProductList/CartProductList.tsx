import CartProductCard from "../CartProductCard/CartProductCard";
import StoreContext from "../../helpers/StoreContext";
import { ChevronDown } from 'react-feather';
import { useContext } from "react";
import { Product } from "../../Types/Product";


const CartProductList: React.FC = () => {
  const {orderPrice, cartProducts} = useContext(StoreContext);
  return (
    <>
      <h1>Total price: ${orderPrice?.toFixed(2)}</h1>
      <table className="cart-table">
        <thead className="cart-table__head">
          <tr className="cart-table__row">
            <th className="cart-table__img">Preview</th>
            <th className="cart-table__name">Name:</th>
            <th className="cart-table__price">Price:</th>
            <th className="cart-table__qty">Quantity:</th>
            <th className="cart-table__actions"><ChevronDown /></th>
          </tr>
        </thead>
        <tbody>
          {cartProducts?.map((product: Product) => (
              <tr className="cart-table__row" key={product.id}>
                <CartProductCard product={product} />
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default CartProductList;