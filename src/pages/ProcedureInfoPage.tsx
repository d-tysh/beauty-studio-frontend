import { useParams } from "react-router-dom"
import { H2 } from "../components/H2"
import { useGetProcedureByIdQuery } from "../api/procedureApi";
import { Loader } from "../components/Loader";
import { ProcedureInfo } from "../components/procedureComponents/ProcedureInfo";

export const ProcedureInfoPage = () => {
    const { procedureId } = useParams();
    const { data, isLoading, isFetching } = useGetProcedureByIdQuery(procedureId ?? '', {
        refetchOnMountOrArgChange: true
    });

    return (
        <>
            <H2>Procedure info</H2>
            <div className="p-4 flex justify-center">
                { (isLoading || isFetching) && <Loader />}
                { !isLoading && !isFetching && data && <ProcedureInfo procedureInfo={data[0]} /> }
            </div>
        </>
    )
}