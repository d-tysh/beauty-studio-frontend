import { useParams } from "react-router-dom"
import { H2 } from "../components/H2"
import { useGetClientByIdQuery } from "../api/clientApi";
import { Loader } from "../components/Loader";
import { ClientInfo } from "../components/clientComponents/ClientInfo";

export const ClientInfoPage = () => {
    const { clientId } = useParams();
    const { data, isLoading, isFetching, isError } = useGetClientByIdQuery(clientId ?? '', {
        refetchOnMountOrArgChange: true
    });

    return (
        <>
            <H2>Client info</H2>
            <div className="p-4 flex justify-center">
                {(isLoading || isFetching) && <Loader />}
                {isError && <p>Error! Something went wrong...</p>}
                {!isLoading && !isFetching && data && <ClientInfo clientInfo={data.result} />}
            </div>
        </>
    )
}