import type { IService } from "../../types/service"
import { ServicesListItem } from "./ServicesListItem"

export const ServicesList = ({ services }: { services: IService[] }) => {
    return (
        <div className="table-wrapper">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Description</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => <ServicesListItem key={service._id} service={service} />)}
                </tbody>
            </table>
        </div>
    )
}