import { useNavigate } from "react-router-dom"
import type { IAdmin } from "../../types/admin"

export const AdminsListItem = ({ admin }: { admin: IAdmin }) => {
    const { name, login, status } = admin;
    const navigate = useNavigate();

    return (
        <tr 
            onClick={() => navigate(`/admin/${admin._id}`)} 
            className={`${admin.status === 'pro' && 'bg-amber-100'}`}
        >
            <td>{name}</td>
            <td>{login}</td>
            <td>{status}</td>
        </tr>
    )
}