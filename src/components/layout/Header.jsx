import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { AdminContext } from "../../context/AdminContext";

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
            <Button onClick={cerrarsesion} >Cerrar Sesión</Button>
        </header>
    );
}

export default Header;