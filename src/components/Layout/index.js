import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const index = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default index;
