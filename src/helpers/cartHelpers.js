export const addToCart = (
  event,
  id,
  priceCode,
  title,
  { modifyCart, setCount }
) => {
  event.stopPropagation();
  const cart = JSON.parse(window.localStorage.getItem('cart')) || {};

  if (cart[id]) {
    cart[id].quan = cart[id].quan + 1;
  } else {
    cart[id] = {
      title,
      priceCode,
      quan: 1,
    };
  }
  window.localStorage.setItem('cart', JSON.stringify(cart));
  setCount();
  modifyCart();
};

export const removeFromCart = (id, { modifyCart, setCount }, all = false) => {
  const cart = JSON.parse(window.localStorage.getItem('cart')) || {};

  if ((cart[id] && cart[id].quan === 1) || all) {
    delete cart[id];
  }

  if (cart[id] && cart[id].quan > 1) {
    cart[id].quan = cart[id].quan - 1;
  }

  window.localStorage.setItem('cart', JSON.stringify(cart));
  setCount();
  modifyCart();
};
