import { useContext, useEffect, useState } from 'react';
import { Product } from "../../Types/Product";
import { Heart, ShoppingCart } from 'react-feather'
import addToStorage from '../../helpers/addToCart';
import StoreContext from '../../helpers/StoreContext';
import handleNotification from '../../helpers/handleNotification';
import DetailedProduct from '../DetailedProduct/DetailedProduct';
import './ProductCard.scss';
import { hasProduct } from '../../helpers/hasProduct';
import { handleDelete } from '../../helpers/handleDelete';

type Props = {
  product: Product,
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const {productList, cartProducts, wishlist, setCartProducts, setNotification, setWishlist} = useContext(StoreContext);
  const [detailedProduct, setDetailedProduct] = useState<Product>();
  const {
    id,
    title,
    imgUrl,
    description,
    category,
    price,
    qty,
  } = product;  

  const handleAddToCart = () => {
    if(qty === 0) {
      handleNotification("No items left in storage", setNotification);
      return;
    }
    
    addToStorage(id, productList, cartProducts, setCartProducts);
    handleNotification("Successfully added to cart", setNotification);
  };

  const handleAddToWishlist = () => {
    if(hasProduct(wishlist, id)) {
      handleDelete(id, wishlist, setWishlist);
      handleNotification("Successfully removed from your wishlist :)", setNotification);
      return;
    }

    addToStorage(id, productList, wishlist, setWishlist);
    handleNotification("Successfully added to wishlist ^_^", setNotification);
  };

  const handleDetails = () => {
    setDetailedProduct(product);
  }

  const additionalPrice = price * 1.3;

  return (
    <>
      {detailedProduct ? (
        <DetailedProduct product={product} setDetailedProduct={setDetailedProduct}/>
      ) : (
        <article className="product">
          <div className="product__img--wrapper">
            <img className="product__img" src={`${imgUrl}`} alt={title} />
          </div>

          <div className="product__content">
            <p className="product__category">{category}</p>
            <p onClick={handleAddToWishlist}>
              {hasProduct(wishlist, id) ? <Heart fill=''/> : <Heart /> }

            </p>
            <p className="product__category">Items left: {qty}</p>

            <h1 className="product__title">{title}</h1>

            <p className="product__description">{description}</p>

            <div className="product__flex-group">
              <p className="product__price">
                <span className="visually-hidden">Current price:</span>
                $ {price}
              </p>
              <p className="product__original-price">
                <span className="visually-hidden">Original price:</span>
                <s>$ {additionalPrice.toFixed(2)}</s>
              </p>
            </div>

            <div className="product__buttons">
              <button className="product__button" onClick={handleAddToCart}>
                Add to cart <ShoppingCart size={14} />
              </button>
              <button className="product__button" onClick={handleDetails}>
                  Details
              </button>
            </div>
          </div>
        </article>
      )}
    </>
  )
}

export default ProductCard;
