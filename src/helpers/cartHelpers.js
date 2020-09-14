export const addToCart = (id, title, { modifyCart, setCount }) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};

  if (cart[id]) {
    cart[id].quan = cart[id].quan + 1;
  } else {
    cart[id] = {
      title,
      quan: 1,
    };
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  setCount();
  modifyCart();
};

export const removeFromCart = (id, { modifyCart, setCount }, all = false) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};

  if ((cart[id] && cart[id].quan === 1) || all) {
    delete cart[id];
  }

  if (cart[id] && cart[id].quan > 1) {
    cart[id].quan = cart[id].quan - 1;
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  setCount();
  modifyCart();
};
