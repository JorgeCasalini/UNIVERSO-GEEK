import React from "react";
import Footer from "./Footer";


const Quadros = () => {
    return (
        <body className="body-Quadros">
            <br></br>
            {/* Comeco da Section de produtos lancamentos */}
            <div class="product-container">

                <div class="product-card">
                    <img src="Imagens/Imagem8.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Quadro - Chaves</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$64.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>

                <div class="product-card">
                    <img src="Imagens/Imagem9.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Quadro - Baby Yoda</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">
                        <span class="original-price">R$69.99</span>
                        <span class="discount-price">$45.99</span>
                    </div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>


                <div class="product-card">
                    <img src="Imagens/Imagem10.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Quadro - Joysticks</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$45.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>


                <div class="product-card">
                    <img src="Imagens/Imagem11.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Quadro Impostor - AmongUs</h3>
                    <p class="product-description"></p>
                    <div class="product-price">
                        <span class="original-price">R$59.99</span>
                        <span class="discount-price">R$45.99</span>
                    </div>  <button class="add-to-cart-button">Comprar</button>
                </div>

                <div class="product-card">
                    <img src="Imagens/Imagem12.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Quadro - Os Simpsons Beatles</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$45.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>


                <div class="product-card">
                    <img src="Imagens/Imagem13.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Quadro - Pulp Fiction</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">
                        <span class="original-price">R$99.99</span>
                        <span class="discount-price">R$79.99</span>
                    </div>  <button class="add-to-cart-button">Comprar</button>
                </div>

                <div class="product-card">
                    <img src="Imagens/Imagem14.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Quado - E.T</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$99.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>

            </div>
            {/* Fim da Section de produtos lancamentos */}

            <br />
            <Footer />

        </body >

    )
}

export default Quadros;