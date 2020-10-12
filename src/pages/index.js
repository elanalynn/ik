import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const imgBaseUrl =
  'https://irina-assets.s3-us-west-1.amazonaws.com/with_watermark';

const IndexPage = props => {
  const data = props.data.allArtCsv.edges;
  const imgSet = data.map(({ node }) => {
    return {
      id: node.ID,
      available: node.AVAILABLE,
      mattedSize: node.MATTED_SIZE,
      original: node.ORIGINAL_AVAILABLE,
      priceCode: node.PRICE_CODE,
      src: `${imgBaseUrl}/${node.ID}.jpg`,
      title: node.TITLE,
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
          AVAILABLE
          MATTED_SIZE
          MEDIUM
          ORIGINAL_AVAILABLE
          PRICE_CODE
          TITLE
        }
      }
    }
  }
`;
