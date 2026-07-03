import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";

function App() {

  return (

    <BrowserRouter>
      <Navbar />

      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/category/:categoryId" element={<Category />} />

        <Route path="/item/:itemId" element={<Product />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );

}

export default App;