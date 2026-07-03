import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../../firebase/config";

import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

import "./ItemListContainer.css";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, "products");

    const productsQuery = categoryId
      ? query(
          productsCollection,
          where("category", "==", categoryId)
        )
      : productsCollection;

    getDocs(productsQuery)
      .then((response) => {
        const productsList = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsList);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="item-list-container">
      <h1 className="item-list-title">Productos</h1>

      <ItemList products={products} />
    </main>
  );
}

export default ItemListContainer;