import { NavLink } from "react-router-dom";

export default function Nav () {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/dashboard" >Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/clientes" >Clientes</NavLink>
                </li>
                <li>
                    <NavLink to="/perfil" >Usuarios</NavLink>
                </li>
            </ul>
        </nav>
    );
}