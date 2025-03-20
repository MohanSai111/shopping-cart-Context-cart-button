import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemContext";

function CartModal({toggle}) {
  const{cart}= useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle}>
        Close
      </div>
      <div className={styles.clearButton}>
        Clear
      </div>
      <div className={styles.itemContainer}></div>
      {cart.map((item)=>{
        return(
          <div className={styles.cartCard} key={item.id}>
            <h1
          </div>
        )
      })}

      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>$Price</div>
      </div>
    </div>
  );
}

export default CartModal;
