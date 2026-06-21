import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../hook/useAdmin';
import { Container, TextField, MenuItem, Button, Typography, Box } from '@mui/material';

const Login = () => {
    const [form, setForm] = useState({ nombre: '', sector: '' });
    const [erroresCampo, setErroresCampo] = useState({});
    
    const { guardarSesion } = useAdmin();
    const navigate = useNavigate();

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        
        if (erroresCampo[name]) {
            setErroresCampo(prev => ({ ...prev, [name]: null }));
        };
    };

    const validarForm = ({ nombre, sector }) => {
        const errores = {};
        if (!nombre.trim()) errores.nombre = 'El nombre es obligatorio';
        if (!sector.trim()) errores.sector = 'El sector es obligatorio';
        return errores;
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        
        const errores = validarForm(form);
        if (Object.keys(errores).length > 0) {
             setErroresCampo(errores);
             return;
        }

        guardarSesion({ nombre: form.nombre, sector: form.sector });
        navigate('/dashboard');
    };

    return (
        <Container maxWidth="xs" sx={{ mt: 8 }}>
            <Box component="form" onSubmit={manejarEnvio} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h5" align="center">Acceso Administrador</Typography>
                
                <TextField
                    label="Nombre del Administrador"
                    autoComplete="off"
                    name="nombre"
                    value={form.nombre}
                    onChange={manejarCambio}
                    error={Boolean(erroresCampo.nombre)}
                    helperText={erroresCampo.nombre}
                />
                
                <TextField
                    select
                    label="Sector de la Empresa"
                    name="sector"
                    value={form.sector}
                    onChange={manejarCambio}
                    error={Boolean(erroresCampo.sector)}
                    helperText={erroresCampo.sector}
                >
                    <MenuItem value="Soporte">Soporte</MenuItem>
                    <MenuItem value="Gerencia">Gerencia</MenuItem>
                </TextField>

                <Button type="submit" variant="contained" color="primary" size="large">
                    Ingresar
                </Button>
            </Box>
        </Container>
    );
};

export default Login;