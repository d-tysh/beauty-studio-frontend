import type { IProcedure } from "../../types/procedures"
import { FormWrapper } from "../form/FormWrapper";
import { Field, Form, Formik } from "formik";
import { Button } from "../Button";
import { useHandleDate } from "../../hooks/useHandleDate";
import { ProcedureFormFields } from "./ProcedureFormFields";
import { useGetServicesQuery } from "../../api/serviceApi";
import { useProcedureUpdate } from "../../hooks/procedureHooks/useProcedureUpdate";

export const ProcedureInfo = ({ procedureInfo }: { procedureInfo: IProcedure }) => {
    const { _id: procedureId, procedureName, date, additionalInfo, services, admin, client, price = 0 } = procedureInfo;
    const [day, time] = useHandleDate(date);
    const selectedServices = services.map(service => service._id);
    
    const { data: servicesData, isError: isServicesError } = useGetServicesQuery(undefined, {
        refetchOnMountOrArgChange: true
    });
    
    const { updateProcedure, isUpdateLoading } = useProcedureUpdate({procedureId, servicesData, admin, client});

    return (
        <div className="flex flex-col">
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
                    <Form className="flex flex-col gap-4 w-120 mx-auto mt-8 text-left">
                        <ProcedureFormFields client={client} admin={admin} />

                        <label className="custom-form-label">
                            <span className="font-semibold w-1/3 ml-2 md:ml-0">Services</span>
                            <div className="custom-form-field flex flex-col max-h-50 overflow-y-auto">
                                { isServicesError && <p>Unable to load services...</p> }
                                {
                                    servicesData && servicesData.data.map(service =>
                                        <label key={service._id} 
                                            className="flex gap-2 items-center not-last-of-type:border-b-1 py-2"
                                        >
                                            <Field
                                                type="checkbox" name="services" value={service._id}
                                            />
                                            {service.serviceName}, price {service.price}, time {service.time}
                                        </label>
                                    )
                                }
                            </div>
                        </label>

                        <Button className="custom-form-button mt-2" isLoading={isUpdateLoading} type="submit">
                            💾 Update
                        </Button>
                        <Button className="custom-form-button" isLoading={false}
                            type='button' onClick={() => console.log("DELETE:", procedureId)}>
                            ❌ Delete
                        </Button>
                    </Form>
                </Formik>
            </FormWrapper>
        </div>
    )
}