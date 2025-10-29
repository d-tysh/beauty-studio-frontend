import type { IClient } from "../../types/client"
import { ClientsListItem } from "./ClientsListItem"

export const ClientsList = ({ clients }: { clients: IClient[] }) => {
    return (
        <div className="table-wrapper">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Client name</th>
                        <th>Phone</th>
                        <th className="text-center w-30">Discount</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client: IClient) => <ClientsListItem key={client._id} client={client} />)}
                </tbody>
            </table>
        </div>
    )
}