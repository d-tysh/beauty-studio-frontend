import { Form, Formik, type FormikHelpers } from "formik"
import { Button } from "../Button"
import { AdminFormFields } from "./AdminFormFields"
import { FormWrapper } from "../form/FormWrapper";
import { useAdminRegister } from "../../hooks/adminHooks/useAdminRegister";
import type { IAdminRegister } from "../../types/types";

export const AdminAddForm = ({ refetch }: { refetch: () => void }) => {
    const { addAdmin, isLoading } = useAdminRegister();

    const handleSubmit = async (data: IAdminRegister, { resetForm }: FormikHelpers<IAdminRegister>) => {
        await addAdmin(data);
        resetForm();
        refetch();
    }

    return (
        <FormWrapper>
            <Formik
                initialValues={{ name: '', login: '', email: '', password: '', status: 'basic' }}
                onSubmit={handleSubmit}
            >
                <Form className="flex flex-col gap-4 max-w-120 mx-auto my-4 text-left">
                    <AdminFormFields addAdmin />
                    <Button className="custom-form-button" isLoading={isLoading}>
                        Add admin
                    </Button>
                </Form>
            </Formik>
        </FormWrapper>
    )
}