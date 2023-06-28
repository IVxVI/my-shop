import { Product } from '../../Types/Product';
import { X } from 'react-feather'
import './DetailedProduct.scss';

type Props = {
  product?: Product,
  setDetailedProduct?: React.Dispatch<React.SetStateAction<Product | undefined>>,
}

const DetailedProduct: React.FC<Props> = ({ product, setDetailedProduct }) => {
  const handleClose = () => {
    setDetailedProduct(undefined);
  }

  return (
    <section className="details">
      <button onClick={handleClose}><X/></button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product?.title}</td>
            <td>{product?.price}</td>
            <td>{product?.description}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default DetailedProduct;