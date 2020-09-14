import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const calculateShipping = count => {
  return count && count < 8 ? Math.abs(count - 8) : 0;
};

const ShippingAndTotal = () => {
  const { count } = useContext(CartContext);
  const shipping = calculateShipping(count);

  return (
    <section className="shipping">
      <section className="shipping-costs">
        <h3>Shipping Costs</h3>
        <ul>
          <li>1 print = $7</li>
          <li>2 prints = $6</li>
          <li>3 prints = $5</li>
          <li>4 prints = $4</li>
          <li>5 prints = $3</li>
          <li>6 prints = $2</li>
          <li>7 prints = $1</li>
          <li>8+ prints = Free!</li>
        </ul>
      </section>
      <section>
        <p>
          You have {count} prints in your cart, so your shipping cost is $
          {shipping}.
        </p>
        <p className="total">
          Your total is
          <br />${count * 57 + shipping}
        </p>
      </section>
    </section>
  );
};

export default ShippingAndTotal;
