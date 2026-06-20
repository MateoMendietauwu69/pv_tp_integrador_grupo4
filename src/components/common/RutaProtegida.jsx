import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

function RutaProtegida ({Children}) {
    const {admin} = useContext(AdminContext);
    if(!admin){
        return <Navigate to="/" />
    }
    return children;
}

export default RutaProtegida;