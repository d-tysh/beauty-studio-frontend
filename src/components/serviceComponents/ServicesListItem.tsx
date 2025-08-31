import type { IService } from "../../interfaces/service"

export const ServicesListItem = ({ service }: { service: IService }) => {
    return (
        <li className="font-medium bg-amber-50 shadow-xl w-100 rounded-2xl text-left
            hover:bg-amber-100 hover:cursor-pointer hover:shadow-2xl"
        >
            <table>
                <tbody>
                    <tr className="border-b-2 border-amber-200">
                        <td className="border-r-2 px-4 py-2 border-amber-200">Service</td>
                        <td className="px-4 py-2 w-full">{service.serviceName}</td>
                    </tr>
                    <tr className="border-b-2 border-amber-200">
                        <td className="border-r-2 px-4 py-2 border-amber-200">Description</td>
                        <td className="px-4 py-2 w-full">{service.description}</td>
                    </tr>
                    <tr className="border-b-2 border-amber-200">
                        <td className="border-r-2 px-4 py-2 border-amber-200">Price</td>
                        <td className="px-4 py-2 w-full">{service.price}</td>
                    </tr>
                    <tr>
                        <td className="border-r-2 px-4 py-2 border-amber-200">Time</td>
                        <td className="px-4 py-2 w-full">{service.time}</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
}