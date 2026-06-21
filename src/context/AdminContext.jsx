import { createContext, useState, useEffect } from 'react';

export const AdminContext = createContext(null);

export const ProveedorAdmin = ({ children }) => {
    const [admin, setAdmin] = useState(() => {
        const adminStorage = localStorage.getItem('admin');
        return adminStorage ? JSON.parse(adminStorage) : null;
    });

    useEffect(() => {
        if (admin) {
            localStorage.setItem('admin', JSON.stringify(admin));
        } else {
            localStorage.removeItem('admin');
        }
    }, [admin]);

    const guardarSesion = (datosAdmin) => {
        setAdmin(datosAdmin);
    };

    const cerrarSesion = () => {
        setAdmin(null);
    };

    return (
        <AdminContext.Provider value={{ admin, guardarSesion, cerrarSesion }}>
            {children}
        </AdminContext.Provider>
    );
};
