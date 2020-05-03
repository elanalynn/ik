import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const imgSet = [];

for (let i = 1; i < 100; i++) {
  const imageName = i < 10 ? `100${i}` : `10${i}`;
  const image = {
    src: `https://irina-assets.s3-us-west-1.amazonaws.com/${imageName}.jpg`,
    thumbnail: `https://irina-assets.s3-us-west-1.amazonaws.com/${imageName}.jpg`,
    title: 'Add titles',
    desc: 'Add descriptions',
  };

  imgSet.push(image);
}

const IndexPage = () => (
  <Layout>
    <Gallery images={imgSet} />
  </Layout>
);

export default IndexPage;
