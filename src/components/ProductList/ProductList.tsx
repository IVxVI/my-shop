import { useLocation } from "react-router-dom";
import { Product } from "../../Types/Product";
import ProductCard from "../ProductCard/ProductCard";
import './ProductList.scss';
import CartProductList from "../CartProductList/CartProductList";
import classNames from "classnames";

type Props = {
  productList?: Product[],
  inline?: boolean,
}

const ProductList: React.FC<Props> = ({ productList, inline }) => {
  const location = useLocation();
  const cartRoute = location.pathname === '/cart';
  const noProducts = productList?.length === 0;

  if(noProducts) {
    return <h1>Nothing here!</h1>
  }

  return (
    cartRoute ? (
      <CartProductList />
    ) 
    : (
      <div className={classNames(
        "product__list",
        {"inline": inline}
      )}>
        {productList?.map((product: Product) => (
            <div className="product__item" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    ) 
  )
}

export default ProductList