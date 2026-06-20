import { MenuItem, TextField } from "@mui/material";

export default function Login () {
    return (
        <Login>
            <TextField label="nombre" />
            <select>
                <MenuItem value="soporte" >Soporte</MenuItem>
                <MenuItem value="Gerencia" >Gerencia</MenuItem>
            </select>
        </Login>
    );
}