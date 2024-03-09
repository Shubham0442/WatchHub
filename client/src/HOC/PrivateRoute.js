import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuth, token } = useSelector((state) => state.auth);
  const location = useLocation();

  if (isAuth && token) return children;
  else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateRoute;
