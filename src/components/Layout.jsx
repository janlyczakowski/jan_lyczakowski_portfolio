import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from '../utils/ScrollToTop';

import '../css/index.css';

function Layout(props) {
  const { children } = props;
  const [isMobileNavOpen, isSetMobileNavOpen] = useState(false);

  const contentStyle = isMobileNavOpen ? 'inactive' : 'active';

  return (
    <>
      <Navigation
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={isSetMobileNavOpen}
      />
      <div className={contentStyle}>{children}</div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Layout;
