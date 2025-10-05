import { Link } from "react-router-dom"
import type { IService } from "../../types/service"

export const ServicesListItem = ({ service }: { service: IService }) => {
    const { _id: id, serviceName, description, price, time } = service;

    return (
        <li className="custom-list-item bg-amber-50">
            <Link to={id}>
                <table className="custom-table">
                    <tbody>
                        <tr>
                            <td>Service</td>
                            <td>{serviceName}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{description || '—'}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{price}</td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>{time}</td>
                        </tr>
                    </tbody>
                </table>
            </Link>
        </li>
    )
}