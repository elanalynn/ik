import React from 'react';

export default function Footer({ onClose, isVisible }) {
  return (
    <footer id="footer" className={`panel ${isVisible ? 'active' : ''}`}>
      <section>
        <h2>Get in touch</h2>
        <form
          name="Contact"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="Contact" />
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
      <button
        className="closer"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
      />
    </footer>
  );
}
