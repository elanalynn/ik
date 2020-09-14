import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import { addToCart, removeFromCart } from '../helpers/cartHelpers';

const imgUrlBase = 'https://irina-assets.s3-us-west-1.amazonaws.com/';

const CartItem = ({ id, title }) => {
  const context = useContext(CartContext);
  const { cart } = context;
  const { quan } = Object.keys(cart).length ? cart[id] : 0;

  return quan ? (
    <tr>
      <td>{id}</td>
      <td>
        <h3>{title}</h3>
        {}
      </td>
      <td>
        <img alt={title} src={`${imgUrlBase}${id}.jpg`} />
      </td>
      <td className="quan">
        <div>
          <div>
            <button
              className="quan-button"
              onClick={() => removeFromCart(id, context)}
            >
              -
            </button>
            {quan}
            <button
              className="quan-button"
              onClick={() => addToCart(id, title, context)}
            >
              +
            </button>
          </div>
          <button onClick={() => removeFromCart(id, context, true)}>
            Remove item
          </button>
        </div>
      </td>
      <td>$57</td>
      <td>${57 * quan}</td>
    </tr>
  ) : null;
};

export default CartItem;
