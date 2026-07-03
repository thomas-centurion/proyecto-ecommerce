import { Link } from "react-router-dom";

import CartItem from "../CartItem/CartItem";

import { useCart } from "../../context/CartContext";

import "./Cart.css";

function Cart() {
  const {
    cart,
    clearCart,
    getTotalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="empty-cart">
        <h2>Tu carrito está vacío.</h2>

        <Link to="/">Volver al catálogo</Link>
      </main>
    );
  }

  return (
    <main className="cart-container">
      <h1 className="cart-title">Carrito</h1>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}

      <h2 className="cart-total">
        Total: ${getTotalPrice().toLocaleString()}
      </h2>

      <div className="cart-buttons">
        <button
          className="clear-btn"
          onClick={clearCart}
        >
          Vaciar carrito
        </button>

        <Link to="/checkout">
          <button className="checkout-btn">
            Finalizar compra
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Cart;