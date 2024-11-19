import React from "react";
import { Navigate } from "react-router-dom";

"useAuth"

const ProtectedRoute = ({ isAuthenticated, children }) => {
    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
