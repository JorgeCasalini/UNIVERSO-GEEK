import React from "react";
import './style.css';

function ModalPayment() {

    const completedOrder = () =>{
        alert("Pedido finalizado com sucesso")
    }

    return (
        <>
            <button type="button" className="modalButton" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Finalizar Compra
            </button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Formas de pagamento</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img className="cardFlags" src="/Imagens/cardFlags.png" alt="Bandeiras aceitas" />
                            <form>
                                <main className="contentModal">
                                    <div className="inputCard">
                                        <input type="text" id="nameCard" name="" className="input" required />
                                        <label for="nameCard">Digite o nome no cartão</label>
                                    </div>

                                    <div className="inputCard">
                                        <input type="number" id="numberCard" name="" className="input" required />
                                        <label for="numberCard">Digite o número do cartão</label>
                                    </div>

                                    <div className="inputCard">
                                        <input type="number" id="cvcCard" name="" className="input" required />
                                        <label for="cvcCard">CVC</label>
                                    </div>

                                    <div className="inputCard">
                                        <input type="text" id="numberCard" name="" className="input" required />
                                        <label for="numberCard"> MM / YY</label>
                                    </div>

                                <div class=" d-flex justify-content-between">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Voltar</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={completedOrder}>
                                        Confirmar compra
                                        </button>
                                    
                                </div >
                                </main>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ModalPayment;