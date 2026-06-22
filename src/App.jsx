import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext.jsx';
import Header from './components/layout/Header.jsx';
import Nav from './components/layout/Nav.jsx';
import Footer from './components/layout/Footer.jsx';
import './css/App.css';

const App = () => {
    const {admin} = useContext(AdminContext);

    return (
        <>
            {admin && <Header />}
            {admin && <Nav />}
            <Outlet />
            {admin && <Footer />}
        </>
    );
};

export default App;
