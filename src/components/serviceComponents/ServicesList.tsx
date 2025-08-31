import type { IService } from "../../interfaces/service"
import { ServicesListItem } from "./ServicesListItem"

export const ServicesList = ({services}: { services: IService[]}) => {
    return (
        <ul className="flex flex-col gap-4">
            {services.map((service) => <ServicesListItem key={service._id} service={service} />)}
        </ul>
    )
}