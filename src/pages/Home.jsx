import React from 'react';

import Header from '../components/Header';
import MySkills from '../components/MySkills';
import MyWork from '../components/MyWork';
import Layout from '../components/Layout';
import '../css/index.css';

function Home() {
  return (
    <Layout>
      <Header />
      <div className="home">
        <MySkills />
        <MyWork />
      </div>
    </Layout>
  );
}

export default Home;
