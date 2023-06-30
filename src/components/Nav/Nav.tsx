import { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, Heart, Menu, X, ArrowRight } from "react-feather";
import classNames from "classnames";
import Sidebar from "../Sidebar/Sidebar";
import StoreContext from "../../helpers/StoreContext";
import './Nav.scss';

export const Nav: React.FC = () => {
  const { wishlist, cartProducts } = useContext(StoreContext)
  const [sidebarProducts, setSidebarProducts] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const navRef = useRef(null);

  const totalQty = cartProducts?.reduce((acc, curr) => {
    return acc + curr.qty
  }, 0);

  const handleWishlistVisibility = () => {
    setSidebarProducts(wishlist);
    setVisibility(prevState => !prevState)
  };
  
  const handleCartVisibility = () => {
    setSidebarProducts(cartProducts);
    setVisibility(prevState => !prevState)
  }

  const handleHiddenMenu = () => {
    setHiddenMenu(prevState => !prevState)
  }

  const navLinks = [
    {title: 'Home', to:'/'},
    {title: 'Products', to:'products'},
    {title: 'Cart', to:'cart'},
  ];
  
  const handleOutsideClick = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setVisibility(false);
    }
  };

  const handleSidebarClick = (event: MouseEvent) => {
    event.stopPropagation();
  };
  
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  return (
      <> 
        <nav className="nav" ref={navRef}>
          <div className="nav__footer">
            <div className="nav__footer--item" onClick={handleCartVisibility}>
              <ShoppingCart />
              {totalQty > 0 && 
                <div className="qty__wrapper">
                  <p className="qty">{totalQty}</p>
                </div>}
            </div>
            <div className="nav__footer--item" onClick={handleWishlistVisibility}>
              <Heart />
            </div>
          </div>
          <div className="nav__controllers">
            <p className="nav__controller" onClick={handleHiddenMenu}>
              {!hiddenMenu ? <X /> : <Menu />}
            </p>
          </div>
          <div className={classNames(
            "nav__body",
            { active: hiddenMenu}
            )}>
            <div className="nav__links">
              {navLinks.map(navLink => (
                <div className="nav__item" key={navLink.title}>
                  <NavLink 
                    to={navLink.to} 
                    className={({isActive}) => classNames(
                      "nav__link",
                      {"nav__link--active": isActive}
                    )} 
                    onClick={handleHiddenMenu}
                  >
                    <p>{navLink.title}</p>
                    <p><ArrowRight /></p>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>

        </nav>

        <Sidebar
          visibility={visibility}
          handleVisibiluty={() => setVisibility(prevState => !prevState)}
          products={sidebarProducts}
          onClick={handleSidebarClick}
        />
      </>
  )
}