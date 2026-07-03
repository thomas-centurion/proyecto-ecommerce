import { useState } from "react";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

function ItemDetail({ product }) {
  const [added, setAdded] = useState(false);

  const { addItem } = useCart();

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <main className="item-detail">
      <img src={product.image} alt={product.title} />

      <div className="item-info">
        <h1>{product.title}</h1>

        <h2 className="item-price">${product.price.toLocaleString()}</h2>

        <p>{product.description}</p>

        <p className="item-stock">Stock: {product.stock}</p>

        {added ? (
          <Link to="/cart">
            <button className="go-cart-btn">Ir al carrito</button>
          </Link>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        )}
      </div>
    </main>
  );
}

export default ItemDetail;
