import { useEffect } from "react";
import { useGetAllAdminsQuery } from "../api/adminApi"
import { Loader } from "../components/Loader";
import { selectAdmin } from "../redux/admin/selectors";
import { useAppSelector } from "../redux/hooks";
import { Link, useNavigate } from "react-router-dom";

export const AllAdminsPage = () => {
    const { data, isLoading, error } = useGetAllAdminsQuery();
    const currentAdmin = useAppSelector(selectAdmin);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentAdmin?.status !== 'pro') {
            navigate('/');
        }
    }, [currentAdmin, navigate, error])

    return (
        <div>
            <h2 className='custom-h2'>Admins</h2>
            <div className="p-4 flex justify-center">
                {isLoading && <Loader />}
                {error && !isLoading && <p>Error! Something went wrong...</p>}
                {
                    !error && !isLoading && currentAdmin?.status === 'pro' && data &&
                    <ul className="flex gap-4 flex-col">
                        {
                            data.result.map(admin =>
                                <li key={admin._id} className="servise-list-item">
                                    <Link to={`/admin/${admin._id}`}>
                                        <table className="servise-table">
                                            <tbody>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>{admin.name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Login</td>
                                                    <td>{admin.login}</td>
                                                </tr>
                                                <tr>
                                                    <td>Status</td>
                                                    <td>{admin.status}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                }
            </div>
        </div>
    )
}