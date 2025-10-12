import { useState } from "react";
import { useGetServicesQuery } from "../api/serviceApi";
import { Button } from "../components/Button";
import { H2 } from "../components/H2";
import { Loader } from "../components/Loader";
import { ServicesList } from "../components/serviceComponents/ServicesList";
import { ServiceAddForm } from "../components/serviceComponents/ServiceAddForm";

export const ServicesPage = () => {
    const { data: services, isLoading, isFetching, refetch, error } = useGetServicesQuery(undefined, {
        refetchOnMountOrArgChange: true
    });
    const [isAddFormOpen, setIsAddFormOpen] = useState(false);

    const handleAddFormState = () => {
        setIsAddFormOpen(!isAddFormOpen);
    };

    const btnText = isAddFormOpen ? '🗙 Cancel' : '➕ Add service';

    return (
        <>
            <H2>Services</H2>
            <Button className="mx-auto mt-4 w-40" onClick={handleAddFormState}>
                {btnText}
            </Button>
            { isAddFormOpen && <ServiceAddForm refetch={refetch} /> }
            <div className="p-4 flex justify-center">
                {(isLoading || isFetching) && <Loader />}
                {error && <p>Something went wrong...</p>}
                {
                    !isLoading && !isFetching && !error && services && <ServicesList services={services.data} />
                }
            </div>
        </>
    )
}