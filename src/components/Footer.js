import React from 'react';

import config from '../../config';

export default function Footer({ onClose, isVisible }) {
  return (
    <footer id="footer" className={`panel ${isVisible ? 'active' : ''}`}>
      <div className="inner split">
        <div>
          <section>
            <h2>Get in touch</h2>
            <form method="post" action="/" netlify>
              <div className="fields">
                <div className="field half">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="field half">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="field">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Message"
                  />
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send" className="primary" />
                </li>
              </ul>
            </form>
          </section>
        </div>
      </div>
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
