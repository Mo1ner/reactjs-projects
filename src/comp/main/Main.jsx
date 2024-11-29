import React from "react";
import "./main.css";

const Main = ({ products }) => {
  return (
    <div className="main">
      <div className="container">
        <div className="main-inner">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3 className="product-title">init</h3>
              <p className="product-type">{product.name}</p>
              <p className="product-price">{product.price} $</p>
              <button className="add-to-cart">add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
