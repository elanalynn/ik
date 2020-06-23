import React from 'react';
import config from '../../config';
import { Link } from 'gatsby';

export default function Header({ onAction = () => {} }) {
  return (
    <header id="header">
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
          {/* <li>
            <Link to="/shop" className="">
              Shop
            </Link>
          </li> */}
          <li>
            <a href="#footer" onClick={e => onAction(e, 'about')} className="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
