import { MenuItem, TextField, Button } from "@mui/material"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

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
        <form onSubmit={handleSubmit} > 
            <TextField 
                label="Nombre"
                value={nombre}
                onChange={(e) => setnombre(e.target.value)}
                fullWidth
            />
            <TextField 
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
            <Button type="submit" variant="contained" sx={{mt:2}} >Ingresar</Button>
        </form>
    );
}

export default Login;