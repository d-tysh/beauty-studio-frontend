import { Link } from "react-router-dom"
import type { IAdmin } from "../../types/types"

export const AdminsListItem = ({ admin }: { admin: IAdmin }) => {
    return (
        <li className="custom-list-item">
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