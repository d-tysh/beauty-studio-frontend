import type { IService } from "../../types/service"
import { ServicesListItem } from "./ServicesListItem"

export const ServicesList = ({services}: { services: IService[]}) => {
    return (
        <ul className="flex flex-col gap-4">
            {services.map((service) => <ServicesListItem key={service._id} service={service} />)}
        </ul>
    )
}