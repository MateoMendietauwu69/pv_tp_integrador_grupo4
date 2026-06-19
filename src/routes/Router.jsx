import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../views/Dashboard.jsx';
import PerfilUsuario from '../views/PerfilUsuario.jsx';
import Clientes from '../views/Clientes.jsx';
import Notfound from '../views/Notfound.jsx';
import Nav from '../components/Nav.jsx';

function Router () {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/clientes' element={<Clientes />} />
                <Route path='/perfil' element={<PerfilUsuario />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;