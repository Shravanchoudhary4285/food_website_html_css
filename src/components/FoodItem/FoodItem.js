import React, { useState } from "react";
import "./FoodItem.css";
import { assets, food_list } from "../../Assets/assets";
function FoodItem({ category, setcategory }) {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <h2>Top dishes near you</h2>
      <div className="food-item-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <div key={index} className="food-item-menu">
                <div className="food-item-container">
                  <img
                    className="food-item-img"
                    src={item.image}
                    alt="food-menu"
                  />
                  <img
                    className="add"
                    onClick={() => setItemCount((prev) => prev + 1)}
                    src={assets.add_icon_white}
                    alt="add-icon"
                  />
                </div>
                <div className="food-item-info">
                  <div className="food-item-rating">
                    <p>{item.name}</p>
                    <img src={assets.rating_starts} alt="food-rating" />
                  </div>
                  <p className="food-item-desc">{item.description}</p>
                  <p className="food-item-price">
                    <span style={{ color: "black" }}>₹ </span> {item.price}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodItem;
