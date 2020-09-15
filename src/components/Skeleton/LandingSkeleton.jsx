import React from 'react';
import Layout from '../Layout/Layout';

const LandingSkeleton = () => {
  return (
    <Layout>
      <header
        className="relative bg-gray-800 animate-pulse  rounded"
        style={{
          backgroundSize: 'cover',
          height: '92vh',
        }}
      ></header>
    </Layout>
  );
};

export default LandingSkeleton;
