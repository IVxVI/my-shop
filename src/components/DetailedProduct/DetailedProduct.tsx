import { Product } from '../../Types/Product';
import { Heart, X, ShoppingCart } from 'react-feather'
import './DetailedProduct.scss';
import { hasProduct } from '../../helpers/hasProduct';
import { useContext } from 'react';
import StoreContext from '../../helpers/StoreContext';

type Props = {
  product: Product,
  setDetailedProduct: React.Dispatch<React.SetStateAction<Product | undefined>>,
  handleAddToWishlist: () => void,
  handleAddToCart: () => void,
}

const DetailedProduct: React.FC<Props> = ({ product, setDetailedProduct, handleAddToWishlist, handleAddToCart }) => {
  const { wishlist } = useContext(StoreContext);
  const handleClose = () => setDetailedProduct(undefined);
  const { id, title, price, description, imgUrl } = product;

  return (
    <section className="details">
      <div className="details__controllers">
        <button className="details__controllers--wishlist" onClick={handleAddToWishlist}>
          {hasProduct(wishlist, id) ? <Heart fill=''/> : <Heart /> }
        </button>
        <button className="details__controllers--close" onClick={handleClose}><X/></button>
      </div>
      <div className="details__content content">
        <div className="content__img--wrapper">
          <img className="content__img" src={imgUrl} alt={title} />
        </div>
        <div className="content__group">
          <p className="content__description">{description}</p>
          <p className="content__price">$ {price}</p>
        </div>
      </div>

      <div className="details__footer">
        <button className="details__footer--cart" onClick={handleAddToCart}>Add to cart <ShoppingCart /></button>
      </div>
    </section>
  )
}

export default DetailedProduct;