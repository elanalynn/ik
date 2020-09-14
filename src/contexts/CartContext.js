import React from 'react';

const CartContext = React.createContext({
  count: 0,
  setCount: () => {},
  cart: {},
  modifyCart: () => {},
});

export default CartContext;
