import { FormField } from "../form/FormField"
import type { IClient } from "../../types/client";
import type { IAdmin } from "../../types/admin";
import { ServicesSelect } from "./ServicesSelect";
import type { ValidationErrors } from "../../types/types";
import { ProcedureAdminSelect } from "./ProcedureAdminSelect";
import { ProcedureClientField } from "./ProcedureClientField";

interface ProcedureFormProps {
    client?: Pick<IClient, "_id">,
    admin?: Pick<IAdmin, "_id">,
    addProcedure?: boolean,
    errorsInfo?: ValidationErrors
}

export const ProcedureFormFields = ({ client, admin, addProcedure, errorsInfo }: ProcedureFormProps) => {
    return (
        <>
            <FormField label="Procedure" name="procedureName" errorsInfo={errorsInfo}
                autoComplete="off" placeholder="Enter procedure name..." />
            <FormField as="textarea" label="Additional info" name="additionalInfo" errorsInfo={errorsInfo}
                autoComplete="off" placeholder="Enter additional info..." />
            <FormField type="date" label="Day" name="day" errorsInfo={errorsInfo} />
            <FormField type="time" label="Time" name="time" errorsInfo={errorsInfo} />
            <ServicesSelect />
            <ProcedureClientField client={client} addProcedure={addProcedure} />
            <ProcedureAdminSelect admin={admin} addProcedure={addProcedure} errorsInfo={errorsInfo} />
        </>
    )
}