import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/admin/selectors"
import { useAppSelector } from "../redux/hooks"
import { useGetCurrentAdminQuery } from "../api/adminApi";

interface PrivateRouteProps {
    component: React.ReactElement,
    redirectTo: string
}

export const PrivateRoute = ({ component: Component, redirectTo }: PrivateRouteProps) => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const { isFetching } = useGetCurrentAdminQuery();
    const shouldRedirect = !isLoggedIn && !isFetching;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}