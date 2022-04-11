import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? children : <Navigate to="/login" />;
}
