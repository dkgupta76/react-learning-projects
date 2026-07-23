import FoodInput from "./components/FoodInput";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodItems from "./components/FoodItems";
import { useState } from "react";

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
  let textStateArr = useState();
  let textStateVal = textStateArr[0];
  let textStateVal = textStateArr[1];
  let textToShow = "Food Item Entered by User";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          {" "}
          Above is list of the healthy foods that are good for your health and
          well being{" "}
        </p>
      </Container>
    </>
  );
}

export default App;
