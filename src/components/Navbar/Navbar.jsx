import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <Link to="/">
          TechStore
        </Link>
      </div>

      <nav>

        <NavLink
            to="/category/procesadores"
            className={({ isActive }) =>
                isActive ? "active-link" : ""
            }
        >
        Procesadores
        </NavLink>

        <NavLink
            to="/category/gpu"
            className={({ isActive }) =>
                isActive ? "active-link" : ""
            }
        >
        GPU
        </NavLink>

        <NavLink
            to="/category/ram"
            className={({ isActive }) =>
                isActive ? "active-link" : ""
            }
        >
        RAM    
        </NavLink>

        <NavLink
            to="/category/almacenamiento"
            className={({ isActive }) =>
                isActive ? "active-link" : ""
            }
        >
        Almacenamiento
        </NavLink>

      </nav>

      <Link to="/cart">
        <CartWidget />
      </Link>

    </header>
  );
}

export default Navbar;