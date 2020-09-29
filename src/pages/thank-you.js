import React from 'react';
import Layout from '../components/Layout';

const ThankYouPage = props => {
  return (
    <Layout>
      <article className="thank-you">
        <h1>Thank you for reaching out!</h1>
        <p>Your message has been sent.</p>
      </article>
    </Layout>
  );
};

export default ThankYouPage;
