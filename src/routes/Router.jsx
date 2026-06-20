import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RutaProtegida from '../components/common/RutaProtegida.jsx';
import Login from '../views/Login.jsx';
import Dashboard from '../views/Dashboard.jsx';
import PerfilUsuario from '../views/PerfilUsuario.jsx';
import Clientes from '../views/Clientes.jsx';
import Notfound from '../views/Notfound.jsx';
import Header from '../components/layout/Header.jsx';
import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';

function Router () {
    return (
        <BrowserRouter>
            <Header />
            <Nav />
            <Routes>
                <Route path='/' element={<RutaProtegida><Dashboard /></RutaProtegida>} />
                <Route path='/dashboard' element={<RutaProtegida><Dashboard /></RutaProtegida>} />
                <Route path='/clientes' element={<RutaProtegida><Clientes /></RutaProtegida>} />
                <Route path='/perfil' element={<RutaProtegida><PerfilUsuario /></RutaProtegida>} />
                <Route path='*' element={<Notfound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;