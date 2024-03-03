// layout.tsx
import React from 'react';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>TeamSync</title>
        <meta name="description" content="Your project management platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
        {children}
      </div>
    </div>
  );
};

export default Layout;
