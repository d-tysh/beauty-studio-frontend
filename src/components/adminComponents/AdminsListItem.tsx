import { Link } from "react-router-dom"
import type { IAdmin } from "../../types/admin"
import { useAppSelector } from "../../redux/hooks"
import { selectCurrentAdmin } from "../../redux/admin/selectors"

export const AdminsListItem = ({ admin }: { admin: IAdmin }) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);

    return (
        <li className={`
            custom-list-item bg-amber-50
            ${admin.status === 'pro' && 'bg-amber-100'}
            ${currentAdmin?.id === admin._id && 'bg-yellow-200'}
        `}>
            <Link to={`/admin/${admin._id}`}>
                <table className="custom-table">
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