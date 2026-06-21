import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Login from '../views/Login.jsx';
import Dashboard from '../views/Dashboard.jsx';
import Clientes from '../views/Clientes.jsx';
import PerfilUsuario from '../views/PerfilUsuario.jsx';
import Notfound from '../views/Notfound.jsx';
import RutaProtegida from '../components/common/RutaProtegida.jsx';

const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <RutaProtegida><App /></RutaProtegida>,
        errorElement: <Notfound />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'clientes', element: <Clientes /> },
            { path: 'perfil', element: <PerfilUsuario /> },
        ],
    },
    {
        path: '*',
        element: <Notfound />,
    },
]);

export default routes;
