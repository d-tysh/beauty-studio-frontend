import { useParams } from "react-router-dom"
import { H2 } from "../components/headers/H2";
import { useGetAdminByIdQuery } from "../api/adminApi";
import { Loader } from "../components/Loader";
import { AdminInfo } from "../components/adminComponents/adminInfo";

export const AdminInfoPage = () => {
    const params = useParams<{ id: string }>();
    const { data, isLoading, error } = useGetAdminByIdQuery(params.id ?? "");

    return (
        <div>
            <H2>Admin info</H2>
            { isLoading && <div className="flex justify-center p-4"><Loader /></div> }
            <div className="p-4 text-left inline-block">
                { error && !isLoading && <p>Not found admin with this ID.</p> }
                { data && !isLoading && !error && <AdminInfo adminInfo={data} /> }
            </div>
        </div>
    )
}