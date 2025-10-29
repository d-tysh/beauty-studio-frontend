import type { IAdmin } from "../../types/admin"
import { AdminsListItem } from "./AdminsListItem"

export const AdminsList = ({ admins }: { admins: IAdmin[] }) => {
    return (
        <div className="table-wrapper">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map(admin => <AdminsListItem key={admin._id} admin={admin} />)}
                </tbody>
            </table>
        </div>
    )
}