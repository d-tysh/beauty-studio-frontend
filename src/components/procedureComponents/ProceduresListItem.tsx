import { useNavigate } from "react-router-dom"
import type { IProcedure } from "../../types/procedures"
import { useAppSelector } from "../../redux/hooks"
import { selectCurrentAdmin } from "../../redux/admin/selectors"
import { useHandleDate } from "../../hooks/useHandleDate"

export const ProceduresListItem = ({ procedure }: { procedure: IProcedure }) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const { _id: procedureId, client, date, admin, price, procedureName } = procedure;
    const [day, time] = useHandleDate(date);
    const navigate = useNavigate();

    return (
        <tr onClick={() => navigate(procedureId)}>
            <td>{client.name}</td>
            <td className="text-center">{day}</td>
            <td className="text-center">{time}</td>
            <td>{procedureName}</td>
            { currentAdmin?.status === 'pro' && <td>{admin.name}</td> }
            <td className="text-center">{price}</td>
        </tr>
    )
}