import { useGetServicesQuery } from "../api/serviceApi";
import { Loader } from "../components/Loader";
import { ServicesList } from "../components/serviceComponents/ServicesList";

export const HomePage = () => {
    const { data: services, isLoading, error } = useGetServicesQuery();

    return (
        <div>
            <h2 className="text-2xl font-bold bg-amber-200 p-4">Home</h2>
            <div className="p-4 flex justify-center">
                {isLoading && <Loader />}
                {error && <p>Something went wrong...</p>}
                {
                    !isLoading && !error && services && <ServicesList services={services.data} />
                }
            </div>
        </div>
    )
}