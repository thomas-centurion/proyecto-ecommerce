import { Link } from "react-router-dom";
import "./Item.css";

function Item({ product }) {
  return (
    <div className="item-card">

      <div className="item-image">
        <img src={product.image} alt={product.title} />
      </div>

      <h3>{product.title}</h3>

      <p>${product.price.toLocaleString()}</p>

      <Link to={`/item/${product.id}`} className="btn">
        Ver detalle
      </Link>

    </div>
  );
}

export default Item;