import { useEffect } from "react";
import { useGetAllAdminsQuery } from "../api/adminApi"
import { Loader } from "../components/Loader";
import { selectCurrentAdmin } from "../redux/admin/selectors";
import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { H2 } from "../components/headers/H2";
import { AdminsList } from "../components/adminComponents/AdminsList";

export const AllAdminsPage = () => {
    const { data, isLoading, error } = useGetAllAdminsQuery(undefined, {
        refetchOnMountOrArgChange: true
    });
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentAdmin?.status !== 'pro') {
            navigate('/');
        }
    }, [currentAdmin, navigate, error])

    return (
        <div>
            <H2>Admins</H2>
            <div className="p-4 flex justify-center">
                {isLoading && <Loader />}
                {error && !isLoading && <p>Error! Something went wrong...</p>}
                {
                    !error && !isLoading && currentAdmin?.status === 'pro' && data && <AdminsList admins={data.result} />
                }
            </div>
        </div>
    )
}