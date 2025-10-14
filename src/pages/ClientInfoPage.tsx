import { useParams } from "react-router-dom"
import { H1 } from "../components/H1"
import { useGetClientByIdQuery } from "../redux/api/clientApi";
import { Loader } from "../components/Loader";
import { ClientInfo } from "../components/clientComponents/ClientInfo";

const ClientInfoPage = () => {
    const { clientId } = useParams();
    const { data, isLoading, isFetching, isError } = useGetClientByIdQuery(clientId ?? '', {
        refetchOnMountOrArgChange: true
    });

    return (
        <>
            <H1>Client info</H1>
            <div className="p-4 mx-auto">
                {(isLoading || isFetching) && <div className="flex justify-center p-4"><Loader /></div>}
                {isError && <p>Error! Something went wrong...</p>}
                {!isLoading && !isFetching && data && <ClientInfo clientInfo={data.result} />}
            </div>
        </>
    )
}

export default ClientInfoPage;