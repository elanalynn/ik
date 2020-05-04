import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const IndexPage = props => {
  const data = props.data.allArtCsv.edges;
  const imgSet = data.map(node => {
    return {
      src: node.node.LINK,
      thumbnail: node.node.LINK,
      title: node.node.TITLE,
      desc: node.node.FORMAT,
    };
  });

  return (
    <Layout>
      <Gallery images={imgSet} />
    </Layout>
  );
};

export default IndexPage;

export const IndexQuery = graphql`
  query {
    allArtCsv {
      edges {
        node {
          ID
          TITLE
          FORMAT
          LINK
        }
      }
    }
  }
`;
