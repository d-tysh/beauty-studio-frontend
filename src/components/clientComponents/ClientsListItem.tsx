import { Link } from "react-router-dom"
import type { IClient } from "../../types/client"

export const ClientsListItem = ({ client }: { client: IClient }) => {
    return (
        <li className="custom-list-item bg-amber-50">
            <Link to={client._id}>
                <table className="custom-table">
                    <tbody>
                        <tr>
                            <td>Client name</td>
                            <td>{client.name}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{client.phoneNumber}</td>
                        </tr>
                        <tr>
                            <td>Discount</td>
                            <td>{client.discount}</td>
                        </tr>
                    </tbody>
                </table>
            </Link>
        </li>
    )
}