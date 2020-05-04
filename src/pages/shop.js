import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';

const ShopPage = () => (
  <Layout>
    <article className="container box style3">
      <h1>Shop Irina's Art</h1>

      <section>
        <header>
          <h3>Divider</h3>
        </header>
      </section>
      <section>
        <header>
          <h3>Table</h3>
        </header>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>45815</td>
                <td>Something</td>
                <td>Ut porttitor sagittis lorem quis nisi ornare.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>24524</td>
                <td>Nothing</td>
                <td>Ut porttitor sagittis lorem quis nisi ornare.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>45815</td>
                <td>Something</td>
                <td>Ut porttitor sagittis lorem quis nisi ornare.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>24524</td>
                <td>Nothing</td>
                <td>Ut porttitor sagittis lorem quis nisi ornare.</td>
                <td>19.99</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" />
                <td>100.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section>
        <header>
          <h3>Form</h3>
        </header>
        <form method="post" action="#">
          <div className="row">
            <div className="col-6 col-12-mobile">
              <input
                className="text"
                type="text"
                name="name"
                id="name"
                defaultValue=""
                placeholder="John Doe"
              />
            </div>
            <div className="col-6 col-12-mobile">
              <input
                className="text"
                type="text"
                name="email"
                id="email"
                defaultValue=""
                placeholder="johndoe@domain.tld"
              />
            </div>
            <div className="col-12">
              <select name="department" id="department">
                <option value="">Choose a department</option>
                <option value="1">Manufacturing</option>
                <option value="2">Administration</option>
                <option value="3">Support</option>
              </select>
            </div>
            <div className="col-12">
              <input
                className="text"
                type="text"
                name="subject"
                id="subject"
                defaultValue=""
                placeholder="Enter your subject"
              />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <div className="col-12">
              <ul className="actions">
                <li>
                  <input type="submit" value="Submit" />
                </li>
                <li>
                  <input
                    type="reset"
                    className="style3"
                    defaultValue="Clear Form"
                  />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </section>
    </article>

    <Footer />
  </Layout>
);

export default ShopPage;
