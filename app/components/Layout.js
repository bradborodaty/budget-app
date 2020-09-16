import React, { Fragment } from 'react';

import Nav from './Nav';
import MainContent from './MainContent';
import Footer from './Footer';

function Layout() {
  return (
    <Fragment>
      <Nav />
      <MainContent />
      <Footer />
    </Fragment>
  )
}

export default Layout