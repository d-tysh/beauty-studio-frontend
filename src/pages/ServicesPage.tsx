import { useGetServicesQuery } from "../api/serviceApi";
import { H2 } from "../components/headers/H2";
import { Loader } from "../components/Loader";
import { ServicesList } from "../components/serviceComponents/ServicesList";

export const ServicesPage = () => {
    const { data: services, isLoading, error } = useGetServicesQuery();

    return (
        <>
            <H2>Services</H2>
            <div className="p-4 flex justify-center">
                {isLoading && <Loader />}
                {error && <p>Something went wrong...</p>}
                {
                    !isLoading && !error && services && <ServicesList services={services.data} />
                }
            </div>
        </>
    )
}