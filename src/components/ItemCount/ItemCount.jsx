import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount((prev) => prev + 1);
  };

  const decrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  return (
    <div className="item-count">
      <div className="counter">
        <button onClick={decrease}>-</button>

        <span>{count}</span>

        <button onClick={increase}>+</button>
      </div>

      <button
        className="add-button"
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;