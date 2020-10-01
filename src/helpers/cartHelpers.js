export const getCart = () => {
  return typeof window !== 'undefined' && window.localStorage.getItem('cart')
    ? JSON.parse(window.localStorage.getItem('cart'))
    : {};
};

export const setCart = cart => {
  if (typeof window !== 'undefined')
    window.localStorage.setItem('cart', JSON.stringify(cart));
};

export const addToCart = (
  event,
  id,
  priceCode,
  title,
  { modifyCart, setCount }
) => {
  event.stopPropagation();
  const cart = getCart();

  if (cart[id]) {
    cart[id].quan = cart[id].quan + 1;
  } else {
    cart[id] = {
      title,
      priceCode,
      quan: 1,
    };
  }
  setCart(cart);
  setCount();
  modifyCart();
};

export const removeFromCart = (id, { modifyCart, setCount }, all = false) => {
  const cart = getCart();

  if ((cart[id] && cart[id].quan === 1) || all) {
    delete cart[id];
  }

  if (cart[id] && cart[id].quan > 1) {
    cart[id].quan = cart[id].quan - 1;
  }

  setCart(cart);
  setCount();
  modifyCart();
};
