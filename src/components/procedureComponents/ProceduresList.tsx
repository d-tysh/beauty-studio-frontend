import type { IProcedure } from "../../types/procedures";
import { ProceduresListItem } from "./ProceduresListItem";

export const ProceduresList = ({ procedures }: { procedures: IProcedure[] }) => {
    return (
        <ul className="flex flex-col gap-4 items-center">
            { procedures.map((procedure: IProcedure) => <ProceduresListItem key={procedure._id} procedure={procedure} />) }
        </ul>
    )
}