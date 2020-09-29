import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';

import CartContext from '../contexts/CartContext';

const shipping = process.env.STRIPE_SHIPPING_PRICE_CODE;

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const getLineItems = (cart, count) => {
  const lineItems = [];

  for (let item in cart) {
    lineItems.push({
      price: cart[item].priceCode,
      quantity: cart[item].quan,
    });
  }

  if (count < 4) lineItems.push({ price: shipping, quantity: 1 });

  return lineItems;
};

const redirectToCheckout = async (event, lineItems) => {
  event.preventDefault();

  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    lineItems,
    mode: 'payment',
    successUrl: `${process.env.BASE_URL}/checkout_success`,
    cancelUrl: `${process.env.BASE_URL}/cart`,
  });

  if (error) {
    console.warn('Error:', error.message);
  }
};

const Checkout = () => {
  const { cart, count } = useContext(CartContext);
  const lineItems = getLineItems(cart, count);

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
