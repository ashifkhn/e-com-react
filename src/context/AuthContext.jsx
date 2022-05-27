import { createContext, useContext, useState } from "react";
import { CartState } from "./CartContext";

const AuthContext = createContext();
const tokenDetails = localStorage.getItem("token");

export const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const { cart } = CartState();

  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
