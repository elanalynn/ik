import React, { useContext } from 'react';
import { Link } from 'gatsby';

import CartContext from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import ShippingAndTotal from '../components/ShippingAndTotal';
import OrderForm from '../components/OrderForm';

const renderItems = cart => {
  return Object.entries(cart).map(item => {
    const itemId = item[0];
    const title = item[1].title;
    return <CartItem key={itemId} id={itemId} title={title} />;
  });
};

const Invoice = () => {
  const context = useContext(CartContext);
  const cart = JSON.parse(localStorage.getItem('cart')) || {};

  return (
    <section className="cart">
      <h1>Cart</h1>
      {context.count > 0 ? (
        <section className="cart">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>{renderItems(cart)}</tbody>
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
