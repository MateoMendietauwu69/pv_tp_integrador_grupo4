import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormularioCliente from "../components/common/FormularioCliente";
import '../css/ListaClientes.css';

const Clientes = () => {
    const navigate = useNavigate();

    const [clientes, setClientes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                setCargando(true);
                const response = await fetch('https://fakestoreapi.com/users');
                if (!response.ok) throw new Error('Error');
                const data = await response.json();
                setClientes(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };
        fetchUsuarios();
    }, []);

    return (
        <div id="formulario">
            <h1>Ahora estas en Clientes</h1>
            
            <FormularioCliente onAddCliente={(nuevo) => {
                const maxId = clientes.length > 0 ? Math.max(...clientes.map(c => Number(c.id))) : 0;
                nuevo.id = maxId + 1;
                setClientes([...clientes, nuevo]);
            }} />

            <div className="tabla-clientes-container">
                <h2 className="tabla-titulo">Clientes Registrados</h2>
                
                {cargando ? (
                    <p className="tabla-cargando">Cargando listado</p>
                ) : error ? (
                    <div className="tabla-error">{error}</div>
                ) : (
                    <table className="tabla-cyber">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th style={{ textAlign: 'center' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((row) => (
                                <tr key={row.id}>
                                    <td>#{row.id}</td>
                                    <td className="nombre-cliente">
                                        {row.name?.firstname} {row.name?.lastname}
                                    </td>
                                    <td>{row.email}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <button 
                                            onClick={() => navigate(`/clientes/${row.id}`)} 
                                            className="boton-cyber-ficha"
                                        >
                                            Ver Ficha →
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Clientes;