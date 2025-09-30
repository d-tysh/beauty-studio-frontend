import { useGetServicesQuery } from "../api/serviceApi";
import { H2 } from "../components/headers/H2";
import { Loader } from "../components/Loader";
import { ServicesList } from "../components/serviceComponents/ServicesList";

export const ServicesPage = () => {
    const { data: services, isLoading, isFetching, error } = useGetServicesQuery(undefined, {
        refetchOnMountOrArgChange: true
    });

    return (
        <>
            <H2>Services</H2>
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