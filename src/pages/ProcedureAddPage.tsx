import { useLocation } from "react-router-dom"
import { H1 } from "../components/H1"
import { ProcedureAddForm } from "../components/procedureComponents/ProcedureAddForm";

export const ProcedureAddPage = () => {
    const { state } = useLocation();

    return (
        <>
            <H1>Add procedure for "{state.clientName}"</H1>
            <ProcedureAddForm />
        </>
    )
}