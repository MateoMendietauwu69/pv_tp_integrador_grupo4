import { Container, Typography } from "@mui/material";

function Notfound () {
    return (
        <Container>
            <Typography variant='h3' >Error</Typography>
            <Typography variant="body1">Pagina no encontrada</Typography>
        </Container>
    );
}

export default Notfound;