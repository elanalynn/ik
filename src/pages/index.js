import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const IndexPage = props => {
  const data = props.data.allArtCsv.edges;
  const imgSet = data.map(node => {
    return {
      id: node.node.ID,
      src: node.node.SOURCE,
      thumbnail: node.node.SOURCE,
      title: node.node.TITLE,
      desc: node.node.FORMAT,
      original: node.node.ORIGINAL,
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
          MEDIUM
          FORMAT
          SOURCE
          ORIGINAL
        }
      }
    }
  }
`;
