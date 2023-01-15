import { formatPrice } from 'util/formatters';

import './styles.css';
type Props = {
  price: number;
};

const ProductPrice = ({ price }: Props) => {
  return (
    <div className="product-price-container">
      <span className="cifrao">R$</span>
      <h3 className="price-color">{formatPrice(price)}</h3>
    </div>
  );
};

export default ProductPrice;
