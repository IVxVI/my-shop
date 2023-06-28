import { Navigate, Route, Routes } from 'react-router-dom';
import { Page404 } from "./pages/404";
import { Nav } from "./components/Nav/Nav"
import { useState, useEffect } from "react";
import { Product } from "./Types/Product";
import { useLocalStorage } from "./helpers/useLocalStorage";
import { calcPrice } from './helpers/calcPrice';

import Cart from "./pages/Cart";
import About from "./pages/About";
import AdminProducts from "./pages/AdminProducts";
import AddProduct from "./pages/AddProduct";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import StoreContext from './helpers/StoreContext';
import Notification from './components/Notification/Notification';
import './styles/main.scss';


function App() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [notification, setNotification] = useState("");
  const [cartProducts, setCartProducts] = useLocalStorage('cart', []);
  const [wishlist, setWishlist] = useLocalStorage('wishlist', []);
  const [orderPrice, setOrderPrice] = useLocalStorage('orderPrice', 0);

  useEffect(() => {
    fetch('src/api/data.json')
      .then(res => res.json()
      .then(data => setProductList(data)))
  }, []);

  useEffect(() => {
    calcPrice(cartProducts, setOrderPrice);
  }, [cartProducts, setOrderPrice]);  

  return (
    <main>
      <StoreContext.Provider value={
        { 
          orderPrice, 
          productList, 
          setProductList, 
          wishlist, 
          setWishlist,
          cartProducts, 
          setCartProducts, 
          notification, 
          setNotification,
        }}
      >
        <Nav />
        {notification && <Notification />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="cart" element={
              <Cart />
          } />
          <Route path="about" element={<About />} />

          <Route path="products">
            <Route index element={<Products />} />
          </Route>

          <Route path="admin">
            <Route path="admin/products" element={<AdminProducts />} />
            <Route path="admin/add-product" element={<AddProduct />} />
          </Route>

          <Route path='*' element={<Page404 />}/>
        </Routes>
      </StoreContext.Provider>
    </main>
  )
}

export default App
