import { useParams } from "react-router-dom"
import { H1 } from "../components/H1";
import { useGetServiceByIdQuery } from "../redux/api/serviceApi";
import { Loader } from "../components/Loader";
import { ServiceInfo } from "../components/serviceComponents/ServiceInfo";

const ServiceInfoPage = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const { data, isLoading, isError, isFetching } = useGetServiceByIdQuery(serviceId ?? '', {
        refetchOnMountOrArgChange: true,
    });

    return (
        <>
            <H1>Service</H1>
            <div className="p-4 mx-auto">
                {(isLoading || isFetching) && <div className="flex justify-center p-4"><Loader /></div>}
                {isError && !isLoading && <p className="text-center">Not found admin with this ID.</p>}
                {data && !isLoading && !isFetching && !isError && <ServiceInfo serviceInfo={data.result} />}
            </div>
        </>
    )
}

export default ServiceInfoPage;