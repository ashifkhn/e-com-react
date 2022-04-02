import "./App.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductsPage/ProductPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { WishListPAge } from "./pages/WishListPage/WishListPAge";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/whilist" element={<WishListPAge />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
