import type React from "react"
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectIsLoggedIn } from "../redux/admin/selectors";

interface RestrictedRouteProps {
    component: React.ReactElement,
    redirectTo: string
}

export const RestrictedRoute = ({component: Component, redirectTo}: RestrictedRouteProps) => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}