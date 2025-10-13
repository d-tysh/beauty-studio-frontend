import { useParams } from "react-router-dom"
import { H1 } from "../components/H1";
import { useGetServiceByIdQuery } from "../api/serviceApi";
import { Loader } from "../components/Loader";
import { ServiceInfo } from "../components/serviceComponents/ServiceInfo";

export const ServiceInfoPage = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const { data, isLoading, error, isFetching } = useGetServiceByIdQuery(serviceId ?? '', {
        refetchOnMountOrArgChange: true,
    });

    return (
        <>
            <H1>Service</H1>
            <div className="p-4">
                {(isLoading || isFetching) && <div className="flex justify-center p-4"><Loader /></div>}
                {error && !isLoading && <p className="text-center">Not found admin with this ID.</p>}
                {data && !isLoading && !isFetching && !error && <ServiceInfo serviceInfo={data.result} />}
            </div>
        </>
    )
}