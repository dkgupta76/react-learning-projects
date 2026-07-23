import styles from "./FoodInput.module.css";
const FoodIput = ({handleOnChange}) => { 
  return (
    <input
      type="text"
      placeholder="Enter Food Item here "
      className={styles.foodInput}
      onChange={handleOnChange}
    />
  );
};
export default FoodIput;
