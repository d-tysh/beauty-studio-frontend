import { useParams } from "react-router-dom"
import { H1 } from "../components/H1"
import { useGetProcedureByIdQuery } from "../redux/api/procedureApi";
import { Loader } from "../components/Loader";
import { ProcedureInfo } from "../components/procedureComponents/ProcedureInfo";

const ProcedureInfoPage = () => {
    const { procedureId } = useParams();
    const { data, isLoading, isFetching } = useGetProcedureByIdQuery(procedureId ?? '', {
        refetchOnMountOrArgChange: true
    });

    return (
        <>
            <H1>Procedure info</H1>
            <div className="p-4 mx-auto">
                { (isLoading || isFetching) && <div className="flex justify-center p-4"><Loader /></div>}
                { !isLoading && !isFetching && data && <ProcedureInfo procedureInfo={data[0]} /> }
            </div>
        </>
    )
}

export default ProcedureInfoPage;