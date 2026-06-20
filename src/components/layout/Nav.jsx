import { NavLink } from "react-router-dom";

const Nav = () => {
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
                    <NavLink to="/detalles" >Detalles</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;