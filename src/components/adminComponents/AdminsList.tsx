import type { IAdmin } from "../../types/admin"
import { AdminsListItem } from "./AdminsListItem"

export const AdminsList = ({ admins }: { admins: IAdmin[] }) => {
    return (
        <ul className="flex gap-4 flex-col items-center">
            { admins.map(admin => <AdminsListItem key={admin._id} admin={admin} />) }
        </ul>
    )
}