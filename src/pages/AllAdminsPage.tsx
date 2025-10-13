import { useEffect, useState } from "react";
import { useGetAllAdminsQuery } from "../api/adminApi"
import { Loader } from "../components/Loader";
import { selectCurrentAdmin } from "../redux/admin/selectors";
import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { H1 } from "../components/H1";
import { AdminsList } from "../components/adminComponents/AdminsList";
import { AdminAddForm } from "../components/adminComponents/AdminAddForm";
import { Button } from "../components/Button";

export const AllAdminsPage = () => {
    const { data, isLoading, error, isFetching, refetch } = useGetAllAdminsQuery(undefined, {
        refetchOnMountOrArgChange: true
    });
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const [isAddFormOpen, setIsAddFormOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentAdmin?.status !== 'pro') {
            navigate('/');
        }
    }, [currentAdmin, navigate, error])

    const handleAddFormState = () => {
        setIsAddFormOpen(!isAddFormOpen);
    };

    const btnText = isAddFormOpen ? '🗙 Cancel' : '➕ Add admin';

    return (
        <div>
            <H1>Admins</H1>
            <Button className="mx-auto mt-4 w-40" onClick={handleAddFormState}>
                {btnText}
            </Button>
            {isAddFormOpen && <AdminAddForm refetch={refetch} />}
            <div className="p-4 flex justify-center flex-col items-center">
                {(isLoading || isFetching) && <div className="mx-auto"><Loader /></div>}
                {error && !isLoading && <p>Error! Something went wrong...</p>}
                {
                    !isLoading && !isFetching && currentAdmin?.status === 'pro' && data &&
                    <AdminsList admins={data.result} />
                }
            </div>
        </div>
    )
}