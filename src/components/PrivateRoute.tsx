import type React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: { children: React.ReactNode }) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if(!isLoggedIn) return <Navigate to="/login" replace/>;
    return children;
}
export default PrivateRoute;