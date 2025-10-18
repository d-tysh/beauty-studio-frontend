import { selectCurrentAdmin } from "../../redux/admin/selectors";
import { useAppSelector } from "../../redux/hooks";
import type { IProcedure } from "../../types/procedures";
import { ProceduresListItem } from "./ProceduresListItem";

export const ProceduresList = ({ procedures }: { procedures: IProcedure[] }) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);

    return (
        <div className="table-wrapper">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th className="min-w-50">Client</th>
                        <th className="text-center min-w-40">🗓️ Day</th>
                        <th className="text-center min-w-30">🕒 Time</th>
                        <th className="min-w-50">Procedure</th>
                        {currentAdmin?.status === 'pro' && <th className="min-w-40">Admin</th>}
                        <th className="text-center w-30">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {procedures.map((procedure: IProcedure) => <ProceduresListItem key={procedure._id} procedure={procedure} />)}
                </tbody>
            </table>
        </div>
    )
}