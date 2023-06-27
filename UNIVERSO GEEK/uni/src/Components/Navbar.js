import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark text-white">
            <div className="logo p-3">
                <Link exact to="/" className="navbar-brand text-white">
                    <div className="logo">
                        <span className="Universo"><strong>Universo</strong></span>
                        <span className="Geek"><strong>Geek</strong></span>
                    </div>
                </Link>
            </div>

            <form class="search-buscar">
                <input class="form-control" type="search" placeholder="Busque por produtos..." aria-label="Search" />
                <button class="btn btn-outline-primary" type="submit">Buscar</button>
            </form>

            <ul class="navbar-navlist">
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                        <i class="bi bi-heart-fill text-white"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                        <i class="bi bi-person-fill text-white"></i>
                    </a>
                </li>
                <li class="nav-item">
                <Link exact to="/carrinho">
                    <a class="nav-link text-white" href="#">
                        <i class="bi bi-cart-fill text-white"></i>
                    </a></Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;
