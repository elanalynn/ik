import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { loadStripe } from '@stripe/stripe-js';

import CartContext from '../contexts/CartContext';
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const shipping = process.env.GATSBY_STRIPE_SHIPPING_PRICE_CODE;
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

const getLineItems = (cart, count) => {
  const lineItems = [];

  for (let item in cart) {
    lineItems.push({
      price: cart[item].priceCode,
      quantity: cart[item].quan,
    });
  }

  if (count < 4) lineItems.push({ price: shipping, quantity: 1 });

  return lineItems;
};

const redirectToCheckout = async lineItems => {
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    lineItems,
    mode: 'payment',
    successUrl: `${process.env.GATSBY_BASE_URL}/checkout_success`,
    cancelUrl: `${process.env.GATSBY_BASE_URL}/cart`,
  });

  if (error) {
    console.warn('Error:', error.message);
  }
};

const OrderForm = () => {
  const { cart, count } = useContext(CartContext);
  const lineItems = getLineItems(cart, count);
  const { register, handleSubmit, errors } = useForm();

  return (
    <section className="order-form">
      <h2>Ready to Order?</h2>
      <h3>
        Enter <em>shipping</em> info here.
      </h3>
      <p>We will ask for basic billing info on the next page.</p>
      <form
        name="order"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(() => redirectToCheckout(lineItems))}
      >
        <input type="hidden" name="form-name" value="order" />

        <div>
          <label>
            Your Email<span className="required">*</span>:{' '}
            <input
              type="email"
              name="email"
              ref={register({
                required: true,
                pattern: emailRegex,
              })}
            />
            {errors.email && (
              <span className="error">
                {errors.email.type === 'required' && (
                  <span className="error">This field is required</span>
                )}
                {errors.email.type === 'pattern' && (
                  <span className="error">
                    This value must be a valid email
                  </span>
                )}
              </span>
            )}
          </label>
        </div>
        <div>
          <label>
            Address 1<span className="required">*</span>:{' '}
            <input
              type="text"
              name="address1"
              ref={register({ required: true })}
            />
            {errors.address1 && (
              <span className="error">This field is required</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Address 2: <input type="text" name="address2" ref={register} />
          </label>
        </div>
        <div>
          <label>
            City<span className="required">*</span>:{' '}
            <input type="text" name="city" ref={register({ required: true })} />
            {errors.city && (
              <span className="error">This field is required</span>
            )}
          </label>
        </div>
        <div>
          <label>
            State<span className="required">*</span>:{' '}
            <select type="text" name="state" ref={register({ required: true })}>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            {errors.state && (
              <span className="error">This field is required</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Zip<span className="required">*</span>:{' '}
            <input type="text" name="zip" ref={register({ required: true })} />
            {errors.zip && (
              <span className="error">This field is required</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Special Instructions: <textarea name="message"></textarea>
          </label>
        </div>
        <p>
          <span className="required">*</span>Required
        </p>
        <p>
          You will be redirected to a page hosted by Stripe (a secure payment
          platform) to complete the checkout process.
        </p>
        <button type="submit" className="checkout">
          Checkout
        </button>
      </form>
    </section>
  );
};

export default OrderForm;
