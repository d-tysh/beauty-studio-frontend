import { Link } from "react-router-dom"
import type { IService } from "../../types/service"

export const ServicesListItem = ({ service }: { service: IService }) => {
    return (
        <li className="custom-list-item">
            <Link to={service._id}>
                <table className="custom-table">
                    <tbody>
                        <tr>
                            <td>Service</td>
                            <td>{service.serviceName}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{service.description}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{service.price}</td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>{service.time}</td>
                        </tr>
                    </tbody>
                </table>
            </Link>
        </li>
    )
}