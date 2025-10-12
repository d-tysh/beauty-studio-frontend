import { H2 } from "../components/H2"
import { useGetAllProceduresQuery } from "../api/procedureApi";
import { Loader } from "../components/Loader";
import { ProceduresList } from "../components/procedureComponents/ProceduresList";

export const AllProceduresPage = () => {
    const { data, isLoading, isFetching } = useGetAllProceduresQuery(undefined, {
        refetchOnMountOrArgChange: true
    });

    return (
        <>
            <H2>Procedures</H2>
            <div className="p-4 flex justify-center">
                { (isLoading || isFetching) && <Loader /> }
                { !isLoading && !isFetching && data.result && <ProceduresList procedures={data.result} /> }
            </div>
        </>
    )
}