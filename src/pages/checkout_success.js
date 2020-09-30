import React from 'react';
import Layout from '../components/Layout';

const CheckoutSuccessPage = () => {
  window.localStorage.clear();
  return (
    <Layout>
      <article className="checkout-success">
        <h1>Thank you for your order!</h1>
        <p>You will recieve an email confirmation shortly.</p>
      </article>
    </Layout>
  );
};

export default CheckoutSuccessPage;
