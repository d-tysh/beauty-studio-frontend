import { H1 } from "../components/H1"
import { useGetAllProceduresQuery } from "../redux/api/procedureApi";
import { Loader } from "../components/Loader";
import { ProceduresList } from "../components/procedureComponents/ProceduresList";

const AllProceduresPage = () => {
    const { data, isLoading, isFetching } = useGetAllProceduresQuery(undefined, {
        refetchOnMountOrArgChange: true
    });

    return (
        <>
            <H1>Procedures</H1>
            <div className="p-4 mx-auto">
                { (isLoading || isFetching) && <div className="flex justify-center"><Loader /></div> }
                { !isLoading && !isFetching && data.result && <ProceduresList procedures={data.result} /> }
            </div>
        </>
    )
}

export default AllProceduresPage;