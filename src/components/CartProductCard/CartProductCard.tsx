import { Product } from "../../Types/Product";
import { Trash } from 'react-feather';
import { useContext, useState } from "react";
import { handleQty } from "../../helpers/handleQty";
import { handleDelete } from "../../helpers/handleDelete";
import StoreContext from "../../helpers/StoreContext";
import DetailedProduct from "../DetailedProduct/DetailedProduct";
import './CartProductCard.scss';

type Props = {
  product: Product,
}

const CartProductCard: React.FC<Props> = ({ product }) => {
  const { cartProducts, setCartProducts } = useContext(StoreContext);
  const [detailedProduct, setDetailedProduct] = useState<Product | undefined>(undefined);
  
  const {
    id,
    title,
    imgUrl,
    price,
    qty
  } = product;

  const handleIncrementQty = () => handleQty(cartProducts, setCartProducts, id, 'increment');
  const handleDecrementQty = () => handleQty(cartProducts, setCartProducts, id, 'decrement');
  const handleDeleteCart = () => handleDelete(id, cartProducts, setCartProducts);
  const handleDetails = () => setDetailedProduct(product);

  return (
      <>
      {detailedProduct ? (
        <DetailedProduct product={product} setDetailedProduct={setDetailedProduct}/>
      ) : (
          <>
            <td className="td__img">
              <div className="img__wrapper">
                <img src={imgUrl} alt={title} />
              </div>
            </td>
            <td className="td__title">{title}</td>
            <td className="td__price">${price}</td>
            <td className="td__qty">
              <button
                className="td__btn--qty"
                onClick={handleDecrementQty}
                disabled={qty === 1}
              >
                &#10094;
              </button>
              <span>{qty}</span>
              <button
                className="td__btn--qty"
                onClick={handleIncrementQty}
                disabled={qty === 10}
              >
                &#10095;
              </button>
            </td>
            
            <div className="td__btns">
              <div className="td__btn">
                <button className="product__button" onClick={handleDetails}>
                  Details
                </button>
              </div>
              <div className="td__btn">
                <button className="btn" onClick={handleDeleteCart}><Trash /></button>
              </div>
            </div>  
          </>
        )}
      </>
  )
}

export default CartProductCard;