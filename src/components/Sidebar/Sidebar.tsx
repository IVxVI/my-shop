import { Product } from "../../Types/Product";
import { ChevronLeft, ChevronRight, ShoppingCart, X } from "react-feather";
import './Sidebar.scss'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import classNames from "classnames";
import StoreContext from "../../helpers/StoreContext";
import { handleQty } from "../../helpers/handleQty";

type Props = {
  products: Product[],
  visibility: boolean,
  handleVisibiluty: () => void,
  onClick: (event: MouseEvent) => void,
}

const Sidebar: React.FC<Props> = ({ visibility, handleVisibiluty, onClick}) => {
  const { orderPrice, cartProducts, setCartProducts } = useContext(StoreContext);

  return (
    <section
      onClick={onClick}
      className={classNames(
        "sidebar",
        {active: visibility}
      )}
    >
      <div className="sidebar__icons">
        <p onClick={handleVisibiluty} className="sidebar__icons--cross"><X /></p>
        <p>
          <NavLink onClick={handleVisibiluty} to='/cart' className="sidebar__icons--cart">
            <ShoppingCart />
          </NavLink>
        </p>
      </div>
      <h3 className="sidebar__order-price">Total price: ${orderPrice?.toFixed(2)}</h3>
      <div className="sidebar__items">
        {cartProducts?.map((product) => (
          <div className="sidebar__item item" key={product.id}>
            <h4 className="item__header">{product.title}</h4>
            <p className="item__price">${product.price}</p>
            {product.qty > 1 && 
              <p className="item__qty">
                <ChevronLeft 
                  onClick={() => handleQty(cartProducts, setCartProducts, product.id, 'decrement')}
                />  
                  Quantity: {product.qty} 
                <ChevronRight  
                  onClick={() => handleQty(cartProducts, setCartProducts, product.id, 'increment')}
                />
              </p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sidebar;