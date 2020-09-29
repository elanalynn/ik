import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const calculateShipping = count => {
  return count && count < 4 ? 8 : 0;
};

const ShippingAndTotal = () => {
  const { count } = useContext(CartContext);
  const shipping = calculateShipping(count);

  return (
    <section className="shipping">
      <section>
        {count < 4 ? (
          <p>Free shipping when you spend over $200!</p>
        ) : (
          <p>You get free shipping!</p>
        )}
        <p className="total">Your total is ${count * 60 + shipping}</p>
      </section>
    </section>
  );
};

export default ShippingAndTotal;
