import React from "react";
import Footer from "./Footer";


const Funkopop = () => {
    return (
        <body className="body-Funkopop">
            <br></br>
            {/* Comeco da Section de produtos lancamentos */}
            <div class="product-container">

                <div class="product-card">
                    <img src="Imagens/Imagem29.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Funko-pop - Rocket Raccoon Guardiões da Galáxia Vol.2</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$64.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>

                <div class="product-card">
                    <img src="Imagens/Imagem30.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Funko-pop - Boble-Head o Mandolariano</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">
                        <span class="original-price">R$69.99</span>
                        <span class="discount-price">$45.99</span>
                    </div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>


                <div class="product-card">
                    <img src="Imagens/Imagem31.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Funko-pop Luke-Skywalker</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$45.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>


                <div class="product-card">
                    <img src="Imagens/Imagem32.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Funko-pop Marinheiro Popeye</h3>
                    <p class="product-description"></p>
                    <div class="product-price">
                        <span class="original-price">R$59.99</span>
                        <span class="discount-price">R$45.99</span>
                    </div>  <button class="add-to-cart-button">Comprar</button>
                </div>

                <div class="product-card">
                    <img src="Imagens/Imagem33.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Funko-pop Ellie - The Last Of Us Part II</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$45.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>


                <div class="product-card">
                    <img src="Imagens/Imagem34.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Funko-pop The Godfather</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">
                        <span class="original-price">R$99.99</span>
                        <span class="discount-price">R$79.99</span>
                    </div>  <button class="add-to-cart-button">Comprar</button>
                </div>

                <div class="product-card">
                    <img src="Imagens/Imagem35.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Funko-pop - Xerife Deadpool</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$99.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>

            </div>
            {/* Fim da Section de produtos lancamentos */}
            <br/>
            <Footer />

        </body >
    )
}

export default Funkopop;