import { useCart } from "../../context/CartContext";

import "./CartItem.css";

function CartItem({ item }) {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <div>
        <h3>{item.title}</h3>

        <p>Cantidad: {item.quantity}</p>

        <p>Precio: ${item.price.toLocaleString()}</p>

        <p>
          Subtotal: $
          {(item.price * item.quantity).toLocaleString()}
        </p>
      </div>

      <button
        className="remove-btn"
        onClick={() => removeItem(item.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;