import { useState } from "react";
import { useGetServicesQuery } from "../redux/api/serviceApi";
import { Button } from "../components/Button";
import { H1 } from "../components/H1";
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
            <H1>Services</H1>
            <Button className="mx-auto mt-4 w-40" onClick={handleAddFormState}>
                {btnText}
            </Button>
            { isAddFormOpen && <ServiceAddForm refetch={refetch} /> }
            <div className="p-4 mx-auto">
                {(isLoading || isFetching) && <div className="flex justify-center"><Loader /></div>}
                {error && <p>Something went wrong...</p>}
                {
                    !isLoading && !isFetching && !error && services && <ServicesList services={services.data} />
                }
            </div>
        </>
    )
}