import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import {
  AboutPage,
  ContactPage,
  GalleryPage,
} from '../../pages'

export const Navigation: React.FC = (props: any) => {
  return (
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  )
}
