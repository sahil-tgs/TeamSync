// pages/home.tsx
import React from 'react';
import Layout from './layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16">
        <h1 className="text-3xl font-bold">Welcome to TeamSync</h1>
        <p className="text-lg mt-4">
          Your project management platform
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
