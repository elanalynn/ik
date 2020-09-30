import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import CartContext from '../contexts/CartContext';
import Header from './Header';
import Footer from './Footer';
import '../assets/sass/main.scss';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPreloaded: true,
      footerVisible: false,
      setCount: this.setCount,
      count: 0,
      cart: {},
      modifyCart: this.modifyCart,
    };

    this.linkHandler = this.linkHandler.bind(this);
    this.toggleFooter = this.toggleFooter.bind(this);
  }

  setCount = () => {
    const cart = JSON.parse(window.localStorage.getItem('cart')) || {};

    const reducer = (acc, currentVal) => acc + currentVal;
    const count =
      Object.keys(cart).length &&
      Object.values(cart)
        .map(item => item.quan)
        .reduce(reducer);

    this.setState({ count });
  };

  modifyCart = () => {
    const cart = JSON.parse(window.localStorage.getItem('cart')) || {};

    this.setState({ cart });
  };

  linkHandler(e) {
    e.preventDefault();
    this.toggleFooter();
  }

  toggleFooter() {
    this.setState({ footerVisible: !this.state.footerVisible });
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
      this.setCount();
      this.modifyCart();
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded, footerVisible } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: 'Irina Kopelevich portfolio and shop',
                },
                { name: 'keywords', content: 'art, gifts' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div
              className={`main-body ${footerVisible ? 'content-active' : ''}
               ${isPreloaded ? 'is-preload' : ''}`}
            >
              <CartContext.Provider value={this.state}>
                <div id="wrapper">
                  <Header onAction={this.linkHandler} />
                  <div id="main">{children}</div>
                  <Footer
                    isVisible={footerVisible}
                    onClose={this.toggleFooter}
                  />
                </div>
              </CartContext.Provider>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
