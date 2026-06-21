import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAdmin } from '../../hook/useAdmin';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { admin, cerrarSesion } = useAdmin();
    const navigate = useNavigate();

    const manejarCerrarSesion = () => {
        cerrarSesion();
        navigate('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    TP Integrador PV
                </Typography>

                {admin && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body1">
                            {admin.nombre} ({admin.sector})
                        </Typography>
                        <Button color="inherit" variant="outlined" onClick={manejarCerrarSesion}>
                            Cerrar Sesión
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;