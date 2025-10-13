import type { IProcedure } from "../../types/procedures"
import { FormWrapper } from "../form/FormWrapper";
import { Form, Formik } from "formik";
import { Button } from "../Button";
import { useHandleDate } from "../../hooks/useHandleDate";
import { ProcedureFormFields } from "./ProcedureFormFields";
import { useGetServicesQuery } from "../../api/serviceApi";
import { useProcedureUpdate } from "../../hooks/procedureHooks/useProcedureUpdate";
import { useProcedureDelete } from "../../hooks/procedureHooks/useProcedureDelete";

export const ProcedureInfo = ({ procedureInfo }: { procedureInfo: IProcedure }) => {
    const { _id: procedureId, procedureName, date, additionalInfo, services, admin, client, price = 0 } = procedureInfo;
    const [day, time] = useHandleDate(date);
    const selectedServices = services.map(service => service._id);

    const { data: servicesData } = useGetServicesQuery(undefined, {
        refetchOnMountOrArgChange: true
    });

    const { updateProcedure, isUpdateLoading } = useProcedureUpdate({ procedureId, servicesData, admin, client });
    const { handleDeleteProcedure, isDeleteLoading } = useProcedureDelete(procedureId);

    return (
        // <div className="flex flex-col">
            <FormWrapper>
                <Formik
                    initialValues={{
                        procedureName, additionalInfo, day, time, price,
                        admin: admin.name,
                        client: client.name,
                        services: selectedServices
                    }}
                    enableReinitialize
                    onSubmit={updateProcedure}
                >
                    <Form className="custom-form my-4">
                        <Button className="custom-form-button ml-auto" isLoading={isDeleteLoading}
                            type='button' onClick={handleDeleteProcedure}>
                            ❌ Delete
                        </Button>
                        <ProcedureFormFields client={client} admin={admin} />
                        <Button className="custom-form-button mt-2" isLoading={isUpdateLoading} type="submit">
                            💾 Update
                        </Button>
                    </Form>
                </Formik>
            </FormWrapper>
        // </div>
    )
}