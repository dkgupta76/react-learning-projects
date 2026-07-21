import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = [
    "DAAAL",
    " CHAVAL ",
    "ACHHAR",
    "SALAD",
    "MILK",
    "ROTI",
    "GHEE",
  ];
  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodItems items ={foodItems}></FoodItems>
    </>
  );
}

export default App;
