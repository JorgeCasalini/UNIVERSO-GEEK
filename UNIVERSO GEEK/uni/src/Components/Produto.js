import React, { useState } from "react";
import Footer from "./Footer";



const Produto = ({ handleAddItem, }) => {
    const [quantidade, setQuantidade] = useState(1);

    const aumentarQuantidade = () => {
        setQuantidade(quantidade + 1);
    };

    const diminuirQuantidade = () => {
        if (quantidade > 0) {
            if (quantidade === 1) {
                return;
            }
            setQuantidade(quantidade - 1);
        }
    };



    return (
        <body className="body-Produto">
            <main>
                <section>
                    <div className="container-Produto">
                        <div className="left-side">
                            <div className="items">
                                <div className="imagem-selecionada">
                                    <img className="" src="Imagens/Imagem1.png" alt="" />
                                </div>
                            </div>
                        </div>


                        <div className="right-side">
                            <div className="content">
                                <h2>Camiseta use the force</h2>
                                <p>Não vai me dizer que não ficou interessado por essa camisa?
                                    Eu sei que gostou, não resista. Venha para o lado negro da força, e use sua força!!
                                </p>
                                <div className="prices">
                                    <span class="original-price">R$69,99</span>
                                    <span class="discount-price">R$45.99</span>

                                </div>

                                {/*contador de itens*/}
                                <div className="options">
                                    <div className="quantidade">
                                        <div className="menos" onClick={diminuirQuantidade}>
                                            <img src="Imagens/menos.png" alt="Botão Menos" />
                                        </div>
                                        <span>{quantidade}</span>
                                        <div className="plus" onClick={aumentarQuantidade}>
                                            <img src="Imagens/mais.png" alt="Botão Mais" />
                                        </div>
                                    </div>

                                    <a href="" className="Produto-botao">
                                        Finalizar Compra
                                    </a>

                                    <button className="adicionar-carrinho" onClick={handleAddItem}>
                                        <i className="fas fa-cart-plus"></i> Adicionar ao Carrinho
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>
                <br />
                <div className="Linha-Produto" />
                <div>
                    <h2 class="text-center mb-4">Lançamentos

                    </h2>
                </div>


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
                        <img src="Imagens/Imagem2.png" alt="Product Name" class="product-image" />
                        <h3 class="product-name">Camiseta - Sylvester Stallone</h3>
                        <p class="product-description">Product Description</p>
                        <div class="product-price">
                            <span class="original-price">R$69.99</span>
                            <span class="discount-price">R$45.99</span>
                        </div>
                        <button class="add-to-cart-button">Comprar</button>
                    </div>
                </div>
            </main>
            <br />
            <Footer />

        </body>

    )
}

export default Produto;