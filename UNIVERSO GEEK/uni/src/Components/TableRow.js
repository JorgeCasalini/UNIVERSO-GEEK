import React from "react";
import './style.css';

const TableRow = ({ data, handleRemoveItem, handleUpdateItem }) => {
  return (
    <tr>
      <td>
        <div className="product d-flex align-items-center">
          <img src="https://picsum.photos/100/150" alt={data.description} />
          <div className="info">
            <div className="name fs-5">{data.name}</div>
            <div className="description">{data.description}</div>
          </div>
        </div>
      </td>
      <td>R$ {data.price}</td>
      <td>
        <div className="qty">
          <button
            onClick={() => {
              handleUpdateItem(data, 'decrease');
            }}
          >
            <i className="fa-solid fa-minus fa-2xs"></i>
          </button>
          <span>{data.stockQuantity}</span>
          <button
            onClick={() => {
              handleUpdateItem(data, 'increase');
            }}
          >
            <i className="fa-solid fa-plus fa-2xs"></i></button>
        </div>
      </td>
      <td>R$ {data.price * data.stockQuantity}</td>
      <td>
        <button className="BtnRemove" onClick={() => {
          handleRemoveItem(data)
        }}>
          <i className="fa-solid fa-x fa-2xs"></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;