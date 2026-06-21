import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Nav from './components/layout/Nav.jsx';
import Footer from './components/layout/Footer.jsx';
import { Box, Container } from '@mui/material';
import './css/App.css';

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Nav />
      
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Outlet />
      </Container>
      
      <Footer />
    </Box>
  );
};

export default App;
