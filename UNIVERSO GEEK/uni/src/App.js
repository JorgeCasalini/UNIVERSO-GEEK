import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Produto from "./Components/Produto";
import Funkopop from "./Components/Funkopop";
import Livros from "./Components/Livros";
import Canecas from "./Components/Canecas";
import Quadros from "./Components/Quadros";
import Camisetas from "./Components/Camisetas";
import Categoria from "./Components/Categoria";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Carrinho from "./Components/Carrinho";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    const elements = document.querySelectorAll('.product-card h3')
    const LIMIT = 26
  
    for (let h3 of elements) {
      const aboveLimit = h3.innerText.length > LIMIT
      const dotsOrEmpty = aboveLimit ? '...' : ''
      h3.innerText = h3.innerText.substring(0, LIMIT) + dotsOrEmpty
    }
    return (
      <Router>
        <>
          <Navbar />
          <Categoria />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Camisetas" element={<Camisetas />} />
            <Route exact path="/Quadros" element={<Quadros />} />
            <Route exact path="/Canecas" element={<Canecas />} />
            <Route exact path="/Livros" element={<Livros />} />
            <Route exact path="/Funkopop" element={<Funkopop />} />
            <Route exact path="/Produto" element={<Produto />} />
            <Route exact path="/Carrinho" element={<Carrinho />} />
            <Route exact path="/Footer" element={<Footer />} />

          </Routes>
        </>
      </Router>
    );
  }

}

export default App;
