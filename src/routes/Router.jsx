import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import RutaProtegida from '../components/common/RutaProtegida.jsx';
import Login from '../views/Login.jsx';
import Dashboard from '../views/Dashboard.jsx';
import Detalles from '../views/DetalleCliente.jsx'
import Clientes from '../views/ListaClientes.jsx';
import Notfound from '../views/Notfound.jsx';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Notfound />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                index: true,
                element: <RutaProtegida><Dashboard /></RutaProtegida>
            },
            {
                path: 'dashboard',
                element: <RutaProtegida><Dashboard /></RutaProtegida>
            },
            {
                path: 'clientes',
                element: <RutaProtegida><Clientes /></RutaProtegida>
            },
            {
                path: 'clientes/:id',
                element: <RutaProtegida><Detalles /></RutaProtegida>
            },
            {
                path: '*',
                element: <Notfound />
            }
        ]
    }
]);

export default Router;