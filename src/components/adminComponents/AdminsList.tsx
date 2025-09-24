import type { IAdmin } from "../../types/types"
import { AdminsListItem } from "./AdminsListItem"

export const AdminsList = ({ admins }: { admins: IAdmin[] }) => {
    return (
        <ul className="flex gap-4 flex-col">
            { admins.map(admin => <AdminsListItem key={admin._id} admin={admin} />) }
        </ul>
    )
}