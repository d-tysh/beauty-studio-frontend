import { Form, Formik, type FormikHelpers } from "formik"
import { FormWrapper } from "../form/FormWrapper"
import { ClientFormFields } from "./ClientFormFields"
import { Button } from "../Button"
import type { IClientRegister } from "../../types/client"
import { useClientAdd } from "../../hooks/clientHooks/useClientAdd"
import { clientRegisterSchema } from "../validation"

export const ClientAddForm = ({ refetch }: { refetch: () => void }) => {
    const { handleAddClient, isLoading } = useClientAdd();

    const handleSubmit = async (data: IClientRegister, { resetForm }: FormikHelpers<IClientRegister>) => {
        await handleAddClient(data);
        resetForm();
        refetch();
    }

    return (
        <FormWrapper>
            <Formik
                initialValues={{
                    name: '',
                    phoneNumber: '',
                    description: '',
                    discount: 0
                }}
                validationSchema={clientRegisterSchema}
                onSubmit={handleSubmit}
            >
                <Form className="custom-form my-4">
                        <ClientFormFields />
                        <Button className="custom-form-button" isLoading={isLoading}>
                            Add client
                        </Button>
                    </Form>
            </Formik>
        </FormWrapper>
    )
}