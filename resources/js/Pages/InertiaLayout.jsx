// InertiaLayout.jsx
import React from 'react';
import { usePage } from '@inertiajs/react';
import Header from './header';
import Footer from './footer';

const InertiaLayout = ({ children }) => {
  const { auth } = usePage().props;

  return (
    <>
      <Header auth={auth} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default InertiaLayout;
