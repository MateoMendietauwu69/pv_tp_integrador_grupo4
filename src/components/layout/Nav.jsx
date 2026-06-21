import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Box sx={{ bgcolor: 'primary.dark', p: 1, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button color="inherit" component={Link} to="/dashboard" sx={{ color: 'white' }}>
                Inicio
            </Button>
            <Button color="inherit" component={Link} to="/clientes" sx={{ color: 'white' }}>
                Clientes
            </Button>
            <Button color="inherit" component={Link} to="/perfil" sx={{ color: 'white' }}>
                Usuarios
            </Button>
        </Box>
    );
};

export default Nav;