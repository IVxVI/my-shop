import { Product } from "../../Types/Product";
import { ShoppingCart, X } from "react-feather";
import './Sidebar.scss'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import classNames from "classnames";
import StoreContext from "../../helpers/StoreContext";

type Props = {
  products: Product[],
  visibility: boolean,
  handleVisibiluty: () => void
}

const Sidebar: React.FC<Props> = ({ products, visibility, handleVisibiluty}) => {
  const { orderPrice } = useContext(StoreContext);

  return (
    <section 
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
        {products.map((product) => (
          <div className="sidebar__item item" key={product.id}>
            <h4 className="item__header">{product.title}</h4>
            <p className="item__price">${product.price}</p>
            {product.qty > 1 && <p className="item__qty">Quantity: {product.qty}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sidebar;