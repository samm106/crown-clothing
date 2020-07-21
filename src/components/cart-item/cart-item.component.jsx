import "./cart-item.style.scss";

import React from "react";

const cartItem = ({ item: { imageurl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageurl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default cartItem;
