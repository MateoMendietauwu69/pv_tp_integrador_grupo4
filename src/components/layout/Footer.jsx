import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', bgcolor: 'grey.200' }}>
            <Typography variant="body2" color="text.secondary" align="center">
                TP Final Grupo 4 - Programación Visual (MUI Styled)
            </Typography>
        </Box>
    );
};

export default Footer;