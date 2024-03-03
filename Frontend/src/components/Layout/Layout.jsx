import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../../Router/Router';

const Layout = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';

  return (
    <>
      <Header />
      <Router />
      {!isLoginRoute && <Footer />}
    </>
  );
};

export default Layout;
