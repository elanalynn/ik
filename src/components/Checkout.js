import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';

import CartContext from '../contexts/CartContext';

const priceCodes = {
  ship1: 'price_1H6g77ArX6pWnJoFjVadHnC6',
  ship2: 'price_1H6g6vArX6pWnJoFoweuEEWv',
  ship3: 'price_1H6g6hArX6pWnJoFQRKcqdMf',
  ship4: 'price_1H6g6UArX6pWnJoFhY1M2aSw',
  ship5: 'price_1H6jC4ArX6pWnJoFZPc4cDCu',
  ship6: 'price_1H6g6EArX6pWnJoFrtVfdAHX',
  ship7: 'price_1H6g5wArX6pWnJoFtWWrO2J2',
  freeShipping: 'price_1H6kNpArX6pWnJoFRBgudJ9t',
  mattedPrint: 'price_1H4zqLArX6pWnJoFw4QpzncR',
};

const stripePromise = loadStripe(
  'pk_test_51H4tqJArX6pWnJoFSIoJR6sLakZafb9MRWe9US4TF0dCHvn9jR9xA9CkVyt4ZgvuZ51BKoH8dF1b5i1uSyRkYnIO00JAZdkC7F'
);

const getLineItems = (cart, count) => {
  const lineItems = Object.entries(cart).map(item => ({
    price: priceCodes.mattedPrint,
    quantity: item[1].quan,
  }));

  const shipping = {
    price: count < 8 ? priceCodes[`ship${count}`] : priceCodes.freeShipping,
    quantity: 1,
  };

  lineItems.push(shipping);

  return lineItems;
};

const redirectToCheckout = async (event, lineItems) => {
  event.preventDefault();
  console.log(lineItems);

  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    lineItems,
    mode: 'payment',
    successUrl: `http://localhost:8000/checkout_success`,
    cancelUrl: `http://localhost:8000/checkout_error`,
  });

  if (error) {
    console.warn('Error:', error);
  }
};

const Checkout = () => {
  const { cart, count } = useContext(CartContext);
  const lineItems = getLineItems(cart, count);
  console.log(lineItems);

  return (
    <button
      className="checkout"
      onClick={e => redirectToCheckout(e, lineItems)}
    >
      Checkout
    </button>
  );
};

export default Checkout;
