import { Form, Formik } from "formik"
import type { IService } from "../../types/service"
import { Button } from "../Button";
import { useServiceUpdate } from "../../hooks/serviceHooks/useServiceUpdate";
import { ServiceFormFields } from "./ServiceFormFields";
import { useServiceDelete } from "../../hooks/serviceHooks/useServiceDelete";
import { FormWrapper } from "../form/FormWrapper";
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import { useAppSelector } from "../../redux/hooks";

export const ServiceInfo = ({ serviceInfo }: { serviceInfo: IService }) => {
    const { _id: serviceId, serviceName, description, price, time } = serviceInfo;
    const { handleUpdate, isUpdateLoading } = useServiceUpdate(serviceId);
    const { handleDelete, isDeleteLoading } = useServiceDelete(serviceId);
    const currentAdmin = useAppSelector(selectCurrentAdmin);

    const btnDisabled = currentAdmin?.status !== 'pro';

    return (
        <FormWrapper>
            <Formik
                initialValues={{ serviceName, price, time, description: description || '-' }}
                enableReinitialize
                onSubmit={handleUpdate}
            >
                <Form className="custom-form my-4">
                    <Button className="custom-form-button ml-auto" isLoading={isDeleteLoading}
                        type='button' onClick={handleDelete} disabled={btnDisabled}
                    >
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