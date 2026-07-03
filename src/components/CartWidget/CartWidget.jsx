import { useCart } from "../../context/CartContext";

import "./CartWidget.css";

function CartWidget() {
  const { getTotalQuantity } = useCart();

  return (
    <div className="cart-widget">
      🛒

      {getTotalQuantity() > 0 && (
        <span>{getTotalQuantity()}</span>
      )}
    </div>
  );
}

export default CartWidget;