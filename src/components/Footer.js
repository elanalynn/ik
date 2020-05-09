import React from 'react';

import config from '../../config';

export default function Footer({ onClose, isVisible }) {
  return (
    <footer id="footer" className={`panel ${isVisible ? 'active' : ''}`}>
      <section>
        <h2>Get in touch</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </div>
          <div>
            <button type="submit" className="primary">
              Send
            </button>
          </div>
        </form>
      </section>
      <div
        className="closer"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
      />
    </footer>
  );
}
