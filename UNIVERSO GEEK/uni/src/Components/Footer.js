import React from "react";

const Footer = () => {
    return (
        <>
            <section class="container my-5">
                <h2 class="text-center mb-4">OS MELHORES PRODUTOS NERDS E GEEKS DO BRASIL</h2>
                <p>O Universo Geek é a maior loja de produtos geeks, nerds e criativos do Brasil. São livros, canecas, camisetas,
                    funko-pop, itens de decoração nerd e muito mais produtos especialmente escolhidos pela nossa equipe para fãs e
                    colecionadores.</p>
                <p>Se você quer presentear alguém, aqui é o lugar ideal! A nossa loja conta com muitas opções de presentes criativos
                    para namorados, esposas, mães, pais e outros apaixonados pelo mundo geek e por produtos exclusivos. Jovem Nerd,
                    Azaghal e toda a equipe tem a preocupação de trazer temáticas de Cthulhu, Game Of Thrones, Ozob, Videogames e
                    super heróis da DC e Marvel. E tudo isso para você comprar, pagar em até 10x sem juros e receber o produto
                    rapidamente.</p>
            </section>
            <section class="bg-light py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h4 class="mb-4">Formas de Pagamento</h4>
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item"><i class="fa-brands fa-cc-mastercard fa-2x" ></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-cc-visa fa-2x" ></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-cc-amex fa-2x" ></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-pix fa-2x" ></i></li>
                                <li class="list-inline-item"><i class="fa-solid fa-rectangle-barcode fa-2x" ></i>
                                </li>
                                <li class="list-inline-item"><i class="fa-solid fa-money-bill-transfer fa-2x" ></i>
                                </li>
                                <li class="list-inline-item"><i class="fa-brands fa-cc-paypal fa-2x" ></i></li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h2>Qualidade e segurança</h2>
                            <div class="d-flex flex-row">
                                <div class="mx-2">
                                    <img src="https://sealalimentos.com.br/wp-content/uploads/2018/08/google-safe-browsing.png" width="150"
                                        alt="Google Safe Browsing"></img>
                                </div>
                                <div class="mx-2">
                                    <img src="https://letsencrypt.org/images/letsencrypt-logo-horizontal.svg" width="150" alt="Let's Encrypt"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-dark text-center text-white">
                <div class="container p-4 pb-0">

                    <section class="mb-4">
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i></a>
                    </section>
                </div>

                <div class="text-center p-3">
                    © 2023 Copyright:
                    <a class="text-white" href="#">UniversoGeek.INC Todos os direitos reservados.</a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
