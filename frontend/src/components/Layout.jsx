import * as React from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout({ mode, toggleColorMode }) {
  return (
    <>
      <Header mode={mode} toggleColorMode={toggleColorMode} />
      <Container maxWidth="md" sx={{ mt: 4, minHeight: '70vh' }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
