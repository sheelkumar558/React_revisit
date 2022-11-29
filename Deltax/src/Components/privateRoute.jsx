import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.User.isAuth);
  const token = localStorage.getItem("token");
  const location = useLocation();
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;