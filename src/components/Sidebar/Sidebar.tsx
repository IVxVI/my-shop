import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, X } from "react-feather";
import { Product } from "../../Types/Product";
import StoreContext from "../../helpers/StoreContext";
import SidebarItem from "../SidebarItem/SidebarItem";
import classNames from "classnames";
import './Sidebar.scss';

type Props = {
  products: Product[],
  visibility: boolean,
  handleVisibiluty: () => void,
}

const Sidebar: React.FC<Props> = ({ visibility, handleVisibiluty}) => {
  const { orderPrice, cartProducts } = useContext(StoreContext);

  const handleSidebarClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <section
      onClick={handleSidebarClick}
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
      <h3 className="sidebar__total">
        <span>Total price:</span>
        <span>$ {orderPrice?.toFixed(2)}</span>
      </h3>
      <div className="sidebar__items">
        {cartProducts?.map((product) => <SidebarItem product={product} key={product.id}/>)}
      </div>
    </section>
  )
}

export default Sidebar;