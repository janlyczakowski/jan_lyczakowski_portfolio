import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from '../utils/ScrollToTop';

import '../css/index.css';

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Navigation />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Layout;
