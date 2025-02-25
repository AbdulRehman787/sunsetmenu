import React from "react";
import "./style.css";

const MenuDetails = ({ item, goBack }) => {
  return (
    <div className="menu-details-container">
      <div className="details-image">
        <img src={item.img} alt={item.name} className="details-img" />
      </div>
      <div className="details-content">
        <h2 className="details-title">{item.name}</h2>
        <p className="details-price">Price: ${item.price}</p>
        <p className="details-description">
          A delicious {item.name}, made with high-quality ingredients to give you the perfect taste.
        </p>
      </div>

      {/* 🔴 Fixed Back Button */}
      <button onClick={goBack} className="back-button">⬅ Back to Menu</button>
    </div>
  );
};

export default MenuDetails;
