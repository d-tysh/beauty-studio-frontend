import { Link } from "react-router-dom"
import type { IProcedure } from "../../types/procedures"
import { useAppSelector } from "../../redux/hooks"
import { selectCurrentAdmin } from "../../redux/admin/selectors"

export const ProceduresListItem = ({ procedure }: { procedure: IProcedure }) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);

    return (
        <li className="custom-list-item bg-amber-50">
            <Link to={procedure._id}>
                <table className="custom-table">
                    <tbody>
                        <tr>
                            <td>Procedure</td>
                            <td>{procedure.procedureName}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>{new Date(procedure.date).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <td>Client</td>
                            <td>{procedure.client.name}</td>
                        </tr>
                        {
                            currentAdmin?.status === 'pro' &&
                            <tr>
                                <td>Admin</td>
                                <td>{procedure.admin.name}</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </Link>
        </li>
    )
}