import type { IClient } from "../../types/client"
import { ClientsListItem } from "./ClientsListItem"

export const ClientsList = ({ clients }: { clients: IClient[] }) => {
    return (
        <ul className="flex flex-col gap-4 items-center">
            { clients.map((client: IClient) => <ClientsListItem key={client._id} client={client} />) }
        </ul>
    )
}