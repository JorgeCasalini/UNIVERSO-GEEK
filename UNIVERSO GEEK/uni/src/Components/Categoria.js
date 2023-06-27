import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Categoria = () => {
  return (
    <div className="EstiloCate">
      <div className="Catego">
        <ul className="Cat">
          <li>
            <i className="fas fa-tshirt fa-inverse"></i>
            <a><Link exact to="/Camisetas" id="Camisetas"> Camisetas</Link></a>
          </li>
          <li>
            <i className="fas fa-image fa-inverse"></i>
            <a><Link exact to="/Quadros" id="Quadros"> Quadros</Link></a>
          </li>
          <li>
            <i className="fas fa-mug-hot fa-inverse"></i>
            <a><Link exact to="/Canecas" id="Canecas"> Canecas</Link></a>
          </li>
          <li>
            <i className="fas fa-book fa-inverse"></i>
            <a><Link exact to="/Livros" id="Livros"> Livros</Link></a>
          </li>
          <li>
            <i className="fas fa-film fa-inverse"></i>
            <a><Link exact to="/Funkopop" id="Funko Pop"> Funko Pop</Link></a>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Categoria;
