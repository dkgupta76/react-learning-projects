import styles from "./Item.module.css";

const Item =({foodItem}) =>{
    return (
      <li className={`${styles["dg-item"]} list-group-item`}><span className={styles['dg-span']}>{foodItem}</span></li>
    );
}
export default Item;