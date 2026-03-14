import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;