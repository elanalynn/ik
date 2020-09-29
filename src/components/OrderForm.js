import React from 'react';
import Checkout from '../components/Checkout';

const OrderForm = () => (
  <section className="order-form">
    <h2>Ready to Order?</h2>
    <h3>
      Enter <em>shipping</em> info here.
    </h3>
    <p>We will ask for basic billing info on the next page.</p>
    <form
      name="Order"
      method="POST"
      action="/received"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="order" />

      <div>
        <label>
          Your Email: <input type="email" name="email" required />
        </label>
      </div>
      <div>
        <label>
          Address 1: <input type="text" name="address" required />
        </label>
      </div>
      <div>
        <label>
          Address 2: <input type="text" name="address" />
        </label>
      </div>
      <div>
        <label>
          City : <input type="text" name="address" required />
        </label>
      </div>
      <div>
        <label>
          State : <input type="text" name="address" required />
        </label>
      </div>
      <div>
        <label>
          Zip : <input type="text" name="address" required />
        </label>
      </div>
      <div>
        <label>
          Special Instructions: <textarea name="message"></textarea>
        </label>
      </div>
    </form>
    <p>
      You will be redirected to a page hosted by Stripe (a secure payment
      platform) to complete the checkout process.
    </p>
    <section className="checkout-wrapper">
      <Checkout />
    </section>
  </section>
);

export default OrderForm;
