import { useState } from 'react';
import { Categories } from '../Types/Categories';
import { Product } from '../Types/Product';
import '../styles/page.scss';
// import axios from 'axios';

export default function AddProduct() {
  const [newProduct, setNewProduct] = useState<Product>({
    category: '',
    availability: true,
    id: Math.random(),
    title: '',
    imgUrl: '',
    description: '',
    price: 0,
  });

  const handleChange  = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewProduct(prevData => ({ 
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    };

    fetch('http://localhost:3002/api', config)
      .then((response) => response.json())
      .then((data) => {
        console.log('RESPONSE: ', data);
      })
      .catch((err) => console.log('RESPONSE Error: ', err));
  }

  return (
    <div className="page">
      <h1>Here will be page Add product</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="title">
          Title:
        </label>
        <input value={newProduct.title} onChange={handleChange} type="text" name="title" id="title" />
        <label htmlFor="imgUrl">
          ImgUrl:
        </label>
        <input value={newProduct.imgUrl} onChange={handleChange} type="text" name="imgUrl" id="imgUrl" />
        <label htmlFor="description">
          Description:
        </label>
        <textarea value={newProduct.description} onChange={handleChange} name="description" id="description"></textarea>
        <label htmlFor="category">
          Category:
        </label>
        <select value={newProduct.category} onChange={() => handleChange} id='category' name='category'>
          <option value={Categories.ACCESSORIES}>Accessories</option>
          <option value={Categories.BODY_CARE}>Body care</option>
          <option value={Categories.HAIR_CARE}>Hair care</option>
          <option value={Categories.PARFUM}>Parfum</option>
          <option value={Categories.SKINCARE}>Skincare</option>
        </select>
        <label htmlFor="price">
          Price:
        </label>
        <input value={newProduct.price} onChange={handleChange} type="number" name="price" id="price" />

        <button type="submit">submit</button>
      </form>
    </div>
  )
}