import { Form, Formik, type FormikHelpers } from "formik"
import type { IService } from "../../types/service";
import { Button } from "../Button";
import { useServiceAdd } from "../../hooks/serviceHooks/useServiceAdd";
import { ServiceFormFields } from "./ServiceFormFields";
import { FormWrapper } from "../form/FormWrapper";

export const ServiceAddForm = ({ refetch }: { refetch: () => void }) => {
    const { handleAddService, isLoading } = useServiceAdd();

    const handleSubmit = async (
        data: Omit<IService, '_id'>,
        { resetForm }: FormikHelpers<Omit<IService, '_id'>>
    ) => {
        await handleAddService(data);
        resetForm();
        refetch();
    }

    return (
        <FormWrapper>
            <Formik<Omit<IService, '_id'>>
                initialValues={{
                    serviceName: '',
                    description: '',
                    price: '',
                    time: ''
                }}
                onSubmit={handleSubmit}
            >
                <Form className="custom-form my-4">
                    <ServiceFormFields />
                    <Button className="custom-form-button" isLoading={isLoading}>
                        Add
                    </Button>
                </Form>
            </Formik>
        </FormWrapper>
    )
}