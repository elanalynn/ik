import React from 'react';
import Layout from '../components/Layout';

const AboutPage = props => {
  return (
    <Layout>
      <article className="about">
        <h1>About</h1>
        <p>
          Irina, originally from Riga, Latvia, is an artist now working out of
          Denver, Colorado. Her work has been exhibited in several art
          galleries, including Siempre Viva Art Gallery, Canaan Gallery, Royce
          Gallery, Mizel Museum, and in various exhibitions throughout the
          Denver Metro area. She immigrated to the US in 1980, Irina primarily
          paints with a mixture of tempera and ink wash, and watercolors. She
          has also created numerous works with the simplicity of a charcoal
          pencil, as well as many new mediums. Irina has been featured in
          Hadassah Magazine and is a member of the Colorado Watercolor Society.
        </p>

        <h2>Artist Statement</h2>
        <p>
          I paint because I need to paint. My tools are paper, pencils,
          children's finger paints, and India ink. There is always a distance
          between how I want my painting to look and how it actually does. I
          paint because it makes me happy to be able to put the world that lives
          in my head on the piece of paper. I am not concerned with proportions,
          but with movement and colors. I am trying to paint music in my
          pictures. I am trying to freeze a moment.
        </p>
      </article>
    </Layout>
  );
};

export default AboutPage;
