import React from 'react';
import Banner from '../../components/Banner/Banner';
import Grid from '../../components/Grid/Grid';
import Layout from '../../components/Layout/Layout';
const Home = () => {
  return (
    <>
      <Banner />
      <Layout>
        <Grid />
      </Layout>
    </>
  );
};

export default Home;
