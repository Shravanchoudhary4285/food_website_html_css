import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>order your favourite food here</h2>
        <p>
          choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.our mission
          is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button>view menu</button>
      </div>
    </div>
  );
}

export default Header;
