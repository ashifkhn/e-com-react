import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const { login } = useAuth();
  return login ? (
    children
  ) : (
    <Navigate state={{ from: location }} to="/login" replace />
  );
};
