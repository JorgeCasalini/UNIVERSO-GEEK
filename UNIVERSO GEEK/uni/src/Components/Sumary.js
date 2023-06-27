import './style.css';
import ModalPayment from "./Modal";

const Sumary = ({ total }) => {
  return (
    <aside>
      <div className=" box">
        <header>Você está um clique de distância <br />do seu pedido</header>
        <div className="info">
          <div>
            <span>Sub-total</span>
            <span>R$ {total}</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
        </div>
        <footer>
          <span>Total</span>
          <span>R$ {total}</span>
        </footer>
      </div>
      <ModalPayment />
    </aside>
  );
}

export default Sumary;