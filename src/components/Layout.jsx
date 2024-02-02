import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from '../utils/ScrollToTop';

import '../css/index.css';

function Layout(props) {
  const { children } = props;
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const contentStyle = mobileNavOpen ? 'inactive' : 'active';

  return (
    <>
      <Navigation
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <div className={contentStyle}>{children}</div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Layout;
