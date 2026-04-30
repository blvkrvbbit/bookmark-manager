import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

const PublicRoute = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
