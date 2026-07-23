import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = [
    "Sabji",
    " CHAVAL ",
    "ACHHAR",
    "SALAD",
    "MILK",
    "ROTI",
    "GHEE",
  ];
  return (
    <>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodItems items ={foodItems}></FoodItems>
    </>
  );
}

export default App;
