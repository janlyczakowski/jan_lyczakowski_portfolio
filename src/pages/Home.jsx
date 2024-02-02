import React from 'react';

import Header from '../components/Header';
import MyInterests from '../components/MyInterests';
import MyWork from '../components/MyWork';
import Layout from '../components/Layout';
import '../css/index.css';

function Home() {
  return (
    <Layout>
      <Header />
      <div className="home">
        <MyInterests />
        <MyWork />
      </div>
    </Layout>
  );
}

export default Home;
