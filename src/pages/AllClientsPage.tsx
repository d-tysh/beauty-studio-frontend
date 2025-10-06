import { useGetAllClientsQuery } from "../api/clientApi"
import { H2 } from "../components/headers/H2"
import { Loader } from "../components/Loader";
import { ClientsList } from "../components/clientComponents/ClientsList";
import { useState } from "react";
import { Button } from "../components/Button";
import { ClientAddForm } from "../components/clientComponents/ClientAddForm";

export const AllClientsPage = () => {
    const { data, isLoading, isFetching, isError, refetch } = useGetAllClientsQuery(undefined, {
        refetchOnMountOrArgChange: true
    });
    const [isAddFormOpen, setIsAddFormOpen] = useState(false);

    const handleAddFormState = () => {
        setIsAddFormOpen(!isAddFormOpen);
    };

    const btnText = isAddFormOpen ? '🗙 Cancel' : '➕ Add client';

    return (
        <>
            <H2>Clients</H2>
            <Button className="mx-auto mt-4 w-40" onClick={handleAddFormState}>
                {btnText}
            </Button>
            {isAddFormOpen && <ClientAddForm refetch={refetch} />}
            <div className="p-4 flex justify-center">
                {(isLoading || isFetching) && <Loader />}
                {isError && <p>Error! Something went wrong...</p>}
                {
                    !isLoading && !isFetching && data && <ClientsList clients={data.clients} />
                }
            </div>
        </>
    )
}