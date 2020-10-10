import React from 'react';
import config from '../../config';
import { Link } from 'gatsby';

import Badge from './Badge';

export default function Header({ onAction = () => {} }) {
  return (
    <header className="header">
      <section className="header-content">
        <h1>
          <Link to="/">
            <strong>{config.heading}</strong>
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className="">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="">
                About
              </Link>
            </li>
            <li>
              <Link to="/cart" className="">
                Cart
                <Badge />
              </Link>
            </li>
            <li>
              <a href="#footer" onClick={e => onAction(e)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
