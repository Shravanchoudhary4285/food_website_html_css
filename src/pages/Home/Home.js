import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodItem from "../../components/FoodItem/FoodItem";
import AppDownload from "../../components/AppDownload/AppDownload";
function Home() {
  const [category, setcategory] = useState("");
  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setcategory={setcategory}></ExploreMenu>
      <FoodItem category={category} setcategory={setcategory}></FoodItem>
      <AppDownload></AppDownload>
    </div>
  );
}

export default Home;
