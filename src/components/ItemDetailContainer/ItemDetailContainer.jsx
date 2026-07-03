import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";

import { db } from "../../firebase/config";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { itemId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productRef = doc(db, "products", itemId);

    getDoc(productRef)
      .then((response) => {
        if (response.exists()) {
          setProduct({
            id: response.id,
            ...response.data(),
          });
        } else {
          setProduct(null);
        }
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return (
      <main className="loading-container">
        <h2>Producto no encontrado.</h2>
      </main>
    );
  }

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;