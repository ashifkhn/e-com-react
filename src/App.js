import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductsPage/ProductPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { WishListPAge } from "./pages/WishListPage/WishListPAge";
import { useAuth } from "./context/AuthContext";
import { RequiresAuth } from "./components/Auth/RequiresAuth.jsx"
import Mockman from "mockman-js"
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";

function App() {
  const { login } = useAuth()
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="mock" element={<Mockman />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/wishlist"
            element={
              <RequiresAuth login={login}>
                <WishListPAge />{" "}
              </RequiresAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequiresAuth login={login}>
                <CartPage />{" "}
              </RequiresAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
