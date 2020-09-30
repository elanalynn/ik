import React, { useContext } from 'react';
import { Link } from 'gatsby';

import CartContext from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import ShippingAndTotal from '../components/ShippingAndTotal';
import OrderForm from '../components/OrderForm';
import { desktop } from '../helpers/responsiveHelpers';

const renderItems = cart => {
  return Object.entries(cart).map(item => {
    const itemId = item[0];
    const title = item[1].title;
    return <CartItem key={itemId} id={itemId} title={title} />;
  });
};

const Invoice = () => {
  const context = useContext(CartContext);
  const cart =
    window && window.localStorage.getItem('cart')
      ? JSON.parse(window.localStorage.getItem('cart'))
      : {};

  return (
    <section className="cart">
      <h1>Cart</h1>
      {context.count > 0 ? (
        <section className="cart cart-inner">
          <table>
            <thead>
              <tr>
                {desktop && <th>ID</th>}
                <th>Title</th>
                {desktop && <th>Image</th>}
                <th>Quantity</th>
                {desktop && <th>Unit Price</th>}
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {renderItems(cart)}
              {context.count < 4 && (
                <tr>
                  {desktop && <td></td>}
                  {desktop && <td></td>}
                  {desktop && <td></td>}
                  <td></td>
                  <td>Shipping</td>
                  <td>$8</td>
                </tr>
              )}
            </tbody>
          </table>
          <ShippingAndTotal />
          <OrderForm />
        </section>
      ) : (
        <p className="large-p">
          You have nothing in your cart at this time. Check out the
          <Link to="/"> gallery</Link> to add items!
        </p>
      )}
    </section>
  );
};

export default Invoice;
