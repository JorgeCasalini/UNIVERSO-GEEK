import React from "react";
import "./style.css";
import Footer from "./Footer";


const Home = () => {
  return (
    <body className="body-Home">

      <section class="banner-grande">
        <img src="https://www.patriciafinotti.com.br/wp-content/uploads/2017/05/Universo-Geek.jpg" alt="Banner Grande" />
      </section>


      <section className="container">
        <div id="carouselExampleControls" className="carousel slide mt-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <i className="bi bi-credit-card-fill me-3 text-black"></i>
                <p className="text-black mb-0">Parcele suas compras em até 10x sem juros!</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <i className="bi bi-truck me-3 text-black"></i>
                <p className="text-black mb-0">Entrega em todo o Brasil!</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <i className="bi bi-chat-left-text-fill me-3 text-black"></i>
                <p className="text-black mb-0">Atendimento ao cliente 24/7!</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <main class="container mt-5">
        <h2 class="text-center mb-4">Lançamentos
          <div className="linha-Home"></div>
        </h2>

        {/* Comeco da Section de produtos lancamentos */}
        <div class="product-container">

          <div class="product-card">
            <img src="Imagens/Imagem1.png" alt="Product Name" class="product-image" />
            <h3 class="product-name">Camiseta Darth Vader - Use The Force</h3>
            <p class="product-description">Product Description</p>
            <div class="product-price">R$64.99</div>
            <button class="add-to-cart-button">Comprar</button>
          </div>

          <div class="product-card">
            <img src="Imagens/Imagem2.png" alt="Product Name" class="product-image" />
            <h3 class="product-name">Camiseta - Sylvester Stallone</h3>
            <p class="product-description">Product Description</p>
            <div class="product-price">
              <span class="original-price">R$69.99</span>
              <span class="discount-price">R$45.99</span>
            </div>
            <button class="add-to-cart-button">Comprar</button>
          </div>


          <div class="product-card">
            <img src="Imagens/Imagem3.png" alt="Product Name" class="product-image" />
            <h3 class="product-name">Camiseta - Friends dont Lie</h3>
            <p class="product-description">Product Description</p>
            <div class="product-price">R$45.99</div>
            <button class="add-to-cart-button">Comprar</button>
          </div>


          <div class="product-card">
            <img src="Imagens/Imagem4.png" alt="Product Name" class="product-image" />
            <h3 class="product-name">Camiseta - Homem de Ferro</h3>
            <p class="product-description">Camiseta - Homem de Ferro</p>
            <div class="product-price">
              <span class="original-price">R$59.99</span>
              <span class="discount-price">R$45.99</span>
            </div>  <button class="add-to-cart-button">Comprar</button>
          </div>

          <div class="product-card">
            <img src="Imagens/Imagem5.png" alt="Product Name" class="product-image" />
            <h3 class="product-name">Camiseta - Heisenberg Breaking Bad</h3>
            <p class="product-description">Product Description</p>
            <div class="product-price">R$45.99</div>
            <button class="add-to-cart-button">Comprar</button>
          </div>


          <div class="product-card">
            <img src="Imagens/Imagem6.png" alt="Product Name" class="product-image" />
            <h3 class="product-name">Camiseta - I'm Groot</h3>
            <p class="product-description">Product Description</p>
            <div class="product-price">
              <span class="original-price">R$99.99</span>
              <span class="discount-price">R$79.99</span>
            </div>  <button class="add-to-cart-button">Comprar</button>
          </div>

          <div class="product-card">
            <img src="Imagens/Imagem7.png" alt="Product Name" class="product-image" />
            <h3 class="product-name">Camiseta - Street Fighter</h3>
            <p class="product-description">Product Description</p>
            <div class="product-price">R$99.99</div>
            <button class="add-to-cart-button">Comprar</button>
          </div>

        </div>
        {/* Fim da Section de produtos lancamentos */}
      </main>

      {/* Section dos banners*/}
      <section class="my-5">
        <div class="container">

          <div class="row">

            <div class="col-md-6 mx-auto">
              <div class="card">
                <a href="#">
                  <img src="Imagens/Banner01.png" class="card-img-top" alt="Banner 1" />
                </a>
              </div>
            </div>

            <div class="col-md-6 mx-auto">
              <div class="card">
                <a href="#">
                  <img src="Imagens/Banner02.png" class="card-img-top" alt="Banner 2" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Fim da Section dos banners */}
      <br />
      <Footer />
    </body>




  );
}
export default Home;