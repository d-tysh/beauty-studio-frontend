import { Form, Formik } from "formik"
import type { IService } from "../../types/service"
import { Button } from "../Button";
import { useServiceUpdate } from "../../hooks/serviceHooks/useServiceUpdate";
import { ServiceFormFields } from "./ServiceFormFields";
import { useServiceDelete } from "../../hooks/serviceHooks/useServiceDelete";
import { FormWrapper } from "../form/FormWrapper";

export const ServiceInfo = ({ serviceInfo }: { serviceInfo: IService }) => {
    const { _id: serviceId, serviceName, description, price, time } = serviceInfo;
    const { handleUpdate, isUpdateLoading } = useServiceUpdate(serviceId);
    const { handleDelete, isDeleteLoading } = useServiceDelete(serviceId);

    return (
        <FormWrapper>
            <Formik
                initialValues={{ serviceName, price, time, description: description || '-' }}
                enableReinitialize
                onSubmit={handleUpdate}
            >
                <Form className="flex flex-col gap-4 max-w-120 mx-auto my-8 text-left">
                    <Button className="custom-form-button ml-auto" isLoading={isDeleteLoading}
                        type='button' onClick={handleDelete}>
                        ❌ Delete
                    </Button>
                    <ServiceFormFields />
                    <Button className="custom-form-button mt-2" isLoading={isUpdateLoading}>
                        💾 Update
                    </Button>
                </Form>
            </Formik>
        </FormWrapper>
    )
}