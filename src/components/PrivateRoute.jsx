import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const user = auth.currentUser;
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
