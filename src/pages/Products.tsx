import { useContext, useState, useMemo, useEffect } from "react";
import { Categories } from "../Types/Categories";
import Footer from "../components/Footer/Footer";
import ProductList from "../components/ProductList/ProductList";
import StoreContext from "../helpers/StoreContext";
import SelectDropdown from "../components/SelectDropdown/SelectDropdown";
import Loader from "./Loader";
import '../styles/page.scss';
import '../styles/Products.scss';

const Products = () => {
  const [category, setCategory] = useState(Categories.ALL);
  const [loading, setLoading] = useState(false);    
  const { productList } = useContext(StoreContext);

  function getFilteredList() {
    if (!category || category === Categories.ALL) {
      return productList;
    }

    return productList?.filter((item) => item.category === category);
  }

  const filteredList = useMemo(
    getFilteredList, 
    [category, productList]
  );

  const handleCategoryChange = (event: React.ChangeEvent) => {
    setLoading(true);
    setCategory(event.target.value);
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(delay);
  }, [filteredList]);

  return (
    <>
      <div className="page">
        <h1>Here will be page Products</h1>
        <SelectDropdown handleCategoryChange={handleCategoryChange} />
        {loading ? (
          <div className="page">
            <Loader />
          </div>
        ) : (
          <ProductList productList={filteredList} />
        )}
      </div>
      <Footer />
    </>
  )
}

export default Products;