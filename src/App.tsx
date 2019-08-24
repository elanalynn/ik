import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'

import { Navigation } from './components/Navigation'
import {
  AboutPage,
  ContactPage,
  GalleryPage,
} from './pages'

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <div>
          <Route path="/" exact component={ GalleryPage } />
          <Route path="/about/" component={ AboutPage } />
          <Route path="/contact/" component={ ContactPage } />
        </div>
      </Router>
    </div>
  );
}

export default App;
