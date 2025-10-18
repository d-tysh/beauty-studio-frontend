import { useNavigate } from "react-router-dom"
import type { IService } from "../../types/service"

export const ServicesListItem = ({ service }: { service: IService }) => {
    const { _id: id, serviceName, description, price, time } = service;
    const navigate = useNavigate();

    return (
        <tr onClick={() => navigate(id)}>
            <td>{serviceName}</td>
            <td>{description || '—'}</td>
            <td className="text-center">{price}</td>
            <td className="text-center">{time}</td>
        </tr>
    )
}