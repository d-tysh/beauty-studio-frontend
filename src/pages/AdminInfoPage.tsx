import { useParams } from "react-router-dom"
import { useAppSelector } from "../redux/hooks";
import { selectAdmin } from "../redux/admin/selectors";
import { H2 } from "../components/headers/H2";

export const AdminInfoPage = () => {
    const params = useParams();
    const currentAdmin = useAppSelector(selectAdmin);

    return (
        <div>
            <H2>Admin info</H2>
            <div className="p-4 text-left inline-block">
                <p>
                    <span className="font-semibold">Admin ID: </span>{params.id}
                </p>
                {
                    currentAdmin?.id === params.id &&
                    <>
                        <p>
                            <span className="font-semibold">Name: </span>{currentAdmin?.name}
                        </p>
                        <p>
                            <span className="font-semibold">Login: </span>{currentAdmin?.login}
                        </p>
                        <p>
                            <span className="font-semibold">Status: </span>{currentAdmin?.status}
                        </p>
                    </>
                }
            </div>
        </div>
    )
}