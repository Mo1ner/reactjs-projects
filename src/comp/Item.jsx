import React from "react";
import img from "./../img/macbook-pro 1.png";

const data = {
  img1: { img },
  img2: { img },
  img3: { img },
  img4: { img },
};

const Item = () => {
  return (
    <div className="item">
      <div className="container">
        <div className="item-inner"></div>
      </div>
    </div>
  );
};

export default Item;
