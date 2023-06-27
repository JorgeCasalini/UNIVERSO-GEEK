import React from "react";
import './style.css';
import { useState } from 'react';

function ModalPayment() {
    const [setShow] = useState(false);

    const handleClose = () => setShow(false); //Função para apertar botão e fechar o Modal
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow}>
                Finalizar Compra
            </button>

            
        </>

    );
}

export default ModalPayment;