import { useNavigate } from "react-router-dom"
import type { IClient } from "../../types/client"

export const ClientsListItem = ({ client }: { client: IClient }) => {
    const { _id: id, name, phoneNumber, discount } = client;
    const navigate = useNavigate();

    return (
        <tr onClick={() => navigate(id)}>
            <td>{name}</td>
            <td>{phoneNumber}</td>
            <td className="text-center">{discount}</td>
        </tr>
    )
}