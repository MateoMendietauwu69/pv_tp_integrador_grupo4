import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext.jsx';
import RutaProtegida from '../components/common/RutaProtegida.jsx';
import Login from '../views/Login.jsx';
import Dashboard from '../views/Dashboard.jsx';
import Detalles from '../views/DetalleCliente.jsx'
import Clientes from '../views/ListaClientes.jsx';
import Notfound from '../views/Notfound.jsx';
import Header from '../components/layout/Header.jsx';
import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';

const Router = () => {

    const {admin} = useContext(AdminContext);

    return (
        <BrowserRouter>
            {admin && <Header />}
            {admin && <Nav />}
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<RutaProtegida><Dashboard /></RutaProtegida>} />
                <Route path='/dashboard' element={<RutaProtegida><Dashboard /></RutaProtegida>} />
                <Route path='/clientes' element={<RutaProtegida><Clientes /></RutaProtegida>} />
                <Route path='/clientes/:id' element={<RutaProtegida><Detalles /></RutaProtegida>} />
                <Route path='*' element={<Notfound />} />
            </Routes>
            {admin && <Footer />}
        </BrowserRouter>
    );
}

export default Router;