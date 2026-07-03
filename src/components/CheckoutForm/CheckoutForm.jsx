import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { db } from "../../firebase/config";
import { useCart } from "../../context/CartContext";

import "./CheckoutForm.css";

function CheckoutForm() {
  const navigate = useNavigate();

  const {
    cart,
    getTotalPrice,
    clearCart,
  } = useCart();

  const [buyer, setBuyer] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cart,
      total: getTotalPrice(),
      date: serverTimestamp(),
    };

    try {
      const ordersCollection = collection(db, "orders");

      const response = await addDoc(ordersCollection, order);

      setOrderId(response.id);

      clearCart();
    } catch (error) {
      console.error(error);
    }
  };

  if (orderId) {
    return (
      <main className="checkout-success">
        <h2>¡Compra realizada con éxito!</h2>

        <p>
          Tu número de orden es:
        </p>

        <strong>{orderId}</strong>

        <button
          className="back-home-btn"
          onClick={() => navigate("/")}
        >
          Volver al inicio
        </button>
      </main>
    );
  }

  return (
    <main className="checkout-container">
      <h1>Finalizar compra</h1>

      <form
        className="checkout-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastname"
          placeholder="Apellido"
          value={buyer.lastname}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Confirmar compra
        </button>
      </form>
    </main>
  );
}

export default CheckoutForm;