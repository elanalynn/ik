import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../contexts/CartContext';
import { addToCart, removeFromCart } from '../helpers/cartHelpers';

const imgUrlBase = 'https://irina-assets.s3-us-west-1.amazonaws.com/';

const CartItem = ({ id, priceCode, title }) => {
  const context = useContext(CartContext);
  const [desktop, setDesktop] = useState(false);
  useEffect(() => setDesktop(document.body.clientWidth > 640), []);
  const { cart } = context;
  const { quan } = Object.keys(cart).length ? cart[id] : 0;

  return quan ? (
    <tr>
      {desktop && <td>{id}</td>}
      <td>
        <h3>{title}</h3>
      </td>
      {desktop && (
        <td>
          <img alt={title} src={`${imgUrlBase}${id}.jpg`} />
        </td>
      )}
      <td className="quan">
        <div>
          <div>
            <button
              className="quan-button"
              onClick={() => removeFromCart(id, context)}
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 48 48"
              >
                <path fill="#000" d="M 15,27 V 23 h 20 v 5 H 15 z" />
              </svg>
            </button>
            {quan}
            <button
              className="quan-button"
              onClick={e => addToCart(e, id, title, priceCode, context)}
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#000"
                  d="M 35, 27 H 27 V 35 h -4 v -8 h -8 V 23 h 8 v -8 H 27 v 8 h 8 V 27 z"
                />
              </svg>
            </button>
          </div>
          <button onClick={() => removeFromCart(id, context, true)}>
            Remove item
          </button>
        </div>
      </td>
      {desktop && <td>$60</td>}
      <td>${60 * quan}</td>
    </tr>
  ) : null;
};

export default CartItem;
