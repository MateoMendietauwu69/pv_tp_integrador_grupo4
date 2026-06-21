import { MenuItem, TextField, Button, Typography } from "@mui/material"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import '../css/Login.css'
const Login = () => {

    const [nombre, setnombre] = useState("");
    const [sector, setsector] = useState("");

    const {login} = useContext(AdminContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nombre || !sector) return;
        login(nombre, sector);
        navigate("/dashboard");
    };

    return (
        <div id="logincontainer">
            
            <form onSubmit={handleSubmit} > 
                    <Typography variant="h4" id="titulologin">
                        Login
                    </Typography>
                    <TextField 
                        className="campologin"
                        label="Nombre"
                        value={nombre}
                        onChange={(e) => setnombre(e.target.value)}
                        fullWidth
                    />
                    <TextField 
                        className="campologin"
                        select
                        label="Sector"
                        value={sector}
                        onChange={(e) => setsector(e.target.value)}
                        fullWidth
                        sx={{mt:2}}
                    >
                        <MenuItem value="Soporte">Soporte</MenuItem>
                        <MenuItem value="Gerencia">Gerencia</MenuItem>
                    </TextField>
                    <Button id="botonlogin" type="submit" variant="contained" sx={{mt:2}} >Ingresar</Button>
            </form>
        </div>
    );
}

export default Login;