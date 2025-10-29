import { FormField } from "../form/FormField"
import type { IClient } from "../../types/client";
import type { IAdmin } from "../../types/admin";
import { ServicesSelect } from "./ServicesSelect";
import { ProcedureAdminSelect } from "./ProcedureAdminSelect";
import { ProcedureClientField } from "./ProcedureClientField";

interface ProcedureFormProps {
    client?: Pick<IClient, "_id">,
    admin?: Pick<IAdmin, "_id">,
    addProcedure?: boolean,
}

export const ProcedureFormFields = ({ client, admin, addProcedure }: ProcedureFormProps) => {
    return (
        <>
            <FormField label="Procedure" name="procedureName" 
                autoComplete="off" placeholder="Enter procedure name..." />
            <FormField as="textarea" label="Additional info" name="additionalInfo" 
                autoComplete="off" placeholder="Enter additional info..." />
            <FormField type="date" label="Day" name="day" />
            <FormField type="time" label="Time" name="time" />
            <ServicesSelect />
            <ProcedureClientField client={client} addProcedure={addProcedure} />
            <ProcedureAdminSelect admin={admin} addProcedure={addProcedure} />
        </>
    )
}