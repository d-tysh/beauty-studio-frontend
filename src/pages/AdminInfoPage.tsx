import { useParams } from "react-router-dom"
import { H1 } from "../components/H1";
import { useGetAdminByIdQuery } from "../redux/api/adminApi";
import { Loader } from "../components/Loader";
import { AdminInfo } from "../components/adminComponents/AdminInfo";

export const AdminInfoPage = () => {
    const params = useParams<{ id: string }>();
    const { data, isLoading, error, isFetching } = useGetAdminByIdQuery(params.id ?? "", {
        refetchOnMountOrArgChange: true,
    });

    return (
        <div>
            <H1>Admin info</H1>
            { (isLoading || isFetching) && <div className="flex justify-center p-4"><Loader /></div> }
            <div className="p-4 text-left inline-block w-full">
                { error && !isLoading && <p className="text-center">Not found admin with this ID.</p> }
                { data && !isLoading && !isFetching && !error && <AdminInfo adminInfo={data} /> }
            </div>
        </div>
    )
}