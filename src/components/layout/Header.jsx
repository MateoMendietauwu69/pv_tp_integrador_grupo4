import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { AdminContext } from "../../context/AdminContext";
import '../../css/Header.css'

const Header = () => {

    const {admin, logout} = useContext(AdminContext);
    const navigate =useNavigate();
    const cerrarsesion = () => {
        logout();
        navigate("/login");
    }

    return(
        <header>
            <p>{admin.nombre}</p>
            <p>{admin.sector}</p>
            <Button id="btncerrar" onClick={cerrarsesion} >Cerrar Sesión</Button>
        </header>
    );
}

export default Header;