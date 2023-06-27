import React, { useEffect, useState } from "react";
import './style.css';
import Sumary from "./Sumary";
import TableRow from "./TableRow";
import Footer from "./Footer";

import axios from "axios";


const api = axios.create({
  baseURL: "https://universogeek-api.azurewebsites.net/api/v1"
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



function Carrinho() {
  const [cart, setCart] = useState([]);

  const productObject = {
    name: 'produto',
    description: 'descrição',
    price: randomNumber(20, 180),
    stockQuantity: 1,
    image: 'imagem',
  };

  const fetchData = () => {
    api.get('/product').then((response) => setCart(response.data));
  }

  useEffect(() => {
    fetchData();
  }, []);


  //Inserir
  const handleAddItem = () => {

    console.log("disparou handleAddItem");

    api.post('/product', productObject).then((response) => {
      console.log(response);
      fetchData();
    })
  };


  //Deletar
  const handleRemoveItem = (item) => {
    console.log("Disparou handleRemoveItem")
    console.log({ item });

    api.delete(`/product/${item.id}`).then((response) => {
      console.log(response);
      fetchData();
    });
  };
  //Alterar
  const handleUpdateItem = (item, action) => {

    let newQuantity = item.stockQuantity;

    if (action === 'decrease') {
      if (newQuantity === 1) {
        return;
      }
      newQuantity -= 1;
    }
    if (action === 'increase') {
      newQuantity += 1;
    }

    const newData = { ...item, stockQuantity: newQuantity };
    console.log({ newData });
    api.put(`/product/${item.id}`, newData).then((response) => {
      console.log({ response });
      fetchData();
    })
  };

  const getTotal = () => {
    let sum = 0;

    for (let item of cart) {
      sum += item.price * item.stockQuantity;
    }
    return sum;
  };

  const cartTotal = getTotal();

  parseFloat(getTotal().toFixed(2));

  return (
    <>
      <main>
        <div className="Carrinho page-title text-center fs-3">Carrinho de compras</div>
        <div className="contentCart d-flex">
          <section>
            <button onClick={handleAddItem} style={{ padding: '5px 10px', marginBottom: 15 }}>Add To Cart</button>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th style={{ color: "#ffff" }}>-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <TableRow
                    key={item.id}
                    data={item}
                    handleRemoveItem={handleRemoveItem}
                    handleUpdateItem={handleUpdateItem}
                  />
                ))}
                {cart.length === 0 && (
                  <tr>
                    <td colSpan='5' style={{ textAlign: 'center' }}>
                      <b>Seu carrinho de compras está mais vazio
                        que a cabeça de um dev sênior</b>
                      <img src="Imagens/ImgCartEmpty.png" alt="Imagem de carrinho vazio" />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
          <Sumary total={cartTotal} />
        </div>
      </main>
      <br/>
      <Footer />

    </>


  );
}

export default Carrinho;