import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>404</h1>

      <h2>Página no encontrada</h2>

      <Link to="/">
        Volver al inicio
      </Link>
    </main>
  );
}

export default NotFound;