import React from "react";
import Footer from "./Footer";



const Livros = () => {
    return (
        <body className="body-Livros">
            <br></br>
            {/* Comeco da Section de produtos lancamentos */}
            <div class="product-container">

                <div class="product-card">
                    <img src="Imagens/Imagem22.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Livro A Espada do Destino - The Witcher</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$64.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>

                <div class="product-card">
                    <img src="Imagens/Imagem23.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Livro - Calamidade III</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">
                        <span class="original-price">R$69.99</span>
                        <span class="discount-price">$45.99</span>
                    </div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>


                <div class="product-card">
                    <img src="Imagens/Imagem24.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Livro - Imperiais de Gran Abuelo</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$45.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>


                <div class="product-card">
                    <img src="Imagens/Imagem25.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Livro - Justiça Ancilar</h3>
                    <p class="product-description"></p>
                    <div class="product-price">
                        <span class="original-price">R$59.99</span>
                        <span class="discount-price">R$45.99</span>
                    </div>  <button class="add-to-cart-button">Comprar</button>
                </div>

                <div class="product-card">
                    <img src="Imagens/Imagem26.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Livro O Sangue dos Elfos - The Witcher</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$45.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>


                <div class="product-card">
                    <img src="Imagens/Imagem27.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Livro - Pantera Negra</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">
                        <span class="original-price">R$99.99</span>
                        <span class="discount-price">R$79.99</span>
                    </div>  <button class="add-to-cart-button">Comprar</button>
                </div>

                <div class="product-card">
                    <img src="Imagens/Imagem28.png" alt="Product Name" class="product-image" />
                    <h3 class="product-name">Livro - Star Wars Manual do Império</h3>
                    <p class="product-description">Product Description</p>
                    <div class="product-price">R$99.99</div>
                    <button class="add-to-cart-button">Comprar</button>
                </div>

            </div>
            {/* Fim da Section de produtos lancamentos */}
            <br/>
            <Footer />

        </body >
    );
};

export default Livros;