import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../helpers/getSearchWith';
import Footer from '../components/Footer/Footer';
import ProductList from '../components/ProductList/ProductList';
import StoreContext from '../helpers/StoreContext';
import { useContext, useMemo, useState } from 'react';
import '../styles/page.scss';
import '../styles/HomePage.scss';
import Input from '../components/Input/Input';
import Notification from '../components/Notification/Notification';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const { productList, notification } = useContext(StoreContext);
  const query = searchParams.get('query');
  const filteredProductList = useMemo(() => {
    return productList?.filter(product => (
      query 
      ? product.title.toLowerCase().includes(query.toLowerCase()) 
      : product
    ))
  }, [query, productList])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSearchParams(getSearchWith(searchParams,
      { query: event.target.value }))
  }

  const handleQueryClear = () => {
    setSearchParams(getSearchWith(searchParams,
      { query: '' }));
    setInputValue('');
  };

  const children = {
    query,
    inputValue,
    handleInputChange,
    handleQueryClear,
  }
  
  return (
    <>
      <div className="page">
        {notification && <Notification />}
        <Input {...children} />
        <ProductList productList={filteredProductList} inline={true} />
      </div>
      <Footer />
    </>
  )
}