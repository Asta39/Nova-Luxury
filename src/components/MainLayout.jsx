import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './ui/Header';
import Footer from './ui/Footer';
import FloatingContactButtons from './ui/FloatingContactButtons';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        {/* The Outlet component renders the matched child route element */}
        <Outlet />
      </main>
     
      <FloatingContactButtons />
    </>
  );
};

export default MainLayout;