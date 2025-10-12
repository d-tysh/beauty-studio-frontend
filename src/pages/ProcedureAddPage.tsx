import { useLocation } from "react-router-dom"
import { H2 } from "../components/H2"
import { ProcedureAddForm } from "../components/procedureComponents/ProcedureAddForm";

export const ProcedureAddPage = () => {
    const { state } = useLocation();

    return (
        <>
            <H2>Add procedure for "{state.clientName}"</H2>
            <ProcedureAddForm />
        </>
    )
}