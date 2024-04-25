import { Navigate, useLocation } from "react-router-dom";

import { useAppSelector } from "../store/hooks";

const RequierAuth = ({ children }: { children: JSX.Element }) => {
  const token = useAppSelector((state) => state.user.token);
  let location = useLocation();

  if (!token) {
    if (location.pathname !== "/auth") {
      return <Navigate to="/auth" state={{ from: location }} replace />;
    }
  } else {
    if (location.pathname === "/auth") {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  }

  return children;
};

export default RequierAuth;
