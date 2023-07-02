import { useContext } from "react";
import { ChevronLeft, ChevronRight, MinusSquare } from "react-feather";
import { Product } from "../../Types/Product"
import { handleQty } from "../../helpers/handleQty";
import { handleDelete } from "../../helpers/handleDelete";
import StoreContext from "../../helpers/StoreContext";
import './SidebarItem.scss';

type Props = {
  product: Product,
}

const SidebarItem: React.FC<Props> = ({product}) => {
  const {cartProducts, setCartProducts} = useContext(StoreContext);
  const {id, title, price, qty} = product;

  const handleDecrementQty = () => (
    handleQty(cartProducts, setCartProducts, id, 'decrement')
  );
  const handleIncrementQty = () => (
    handleQty(cartProducts, setCartProducts, id, 'increment')
  );
  const handleDeleteItem = () => (
    handleDelete(id, cartProducts, setCartProducts)
  )


  return (
    <div className="sidebar__item item" key={id}>
      <button 
        className="item__delete" 
        onClick={handleDeleteItem}
      >
        <MinusSquare />
      </button>
      <h4 className="item__header">{title}</h4>
      <p className="item__price">${price}</p>
      <div className="item__qty">
        <button 
          className="item__qty--arr"
          disabled={product.qty === 1} 
          onClick={handleDecrementQty}
        >
          <ChevronLeft />
        </button>
        <span className="item__qty--span">Quantity: {qty} </span>
        <button 
          className="item__qty--arr"
          disabled={qty === 9} 
          onClick={handleIncrementQty}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default SidebarItem;