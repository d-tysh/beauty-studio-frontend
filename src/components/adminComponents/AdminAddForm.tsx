import { Form, Formik, type FormikHelpers } from "formik"
import { Button } from "../Button"
import { AdminFormFields } from "./AdminFormFields"
import { FormWrapper } from "../form/FormWrapper";
import { useAdminRegister } from "../../hooks/adminHooks/useAdminRegister";
import type { IAdminRegister } from "../../types/types";

export const AdminAddForm = ({ register, refetch }: { register?: boolean, refetch?: () => void }) => {
    const { addAdmin, isLoading } = useAdminRegister();

    const handleSubmit = async (data: IAdminRegister, { resetForm }: FormikHelpers<IAdminRegister>) => {
        await addAdmin(data);
        resetForm();
        if (!register && refetch) refetch();
    }

    return (
        <FormWrapper>
            <Formik
                initialValues={{ name: '', login: '', email: '', password: '', status: 'basic' }}
                onSubmit={handleSubmit}
            >
                <Form className="flex flex-col gap-4 max-w-120 mx-auto my-20 text-left">
                    <AdminFormFields addAdmin register />
                    <Button className="custom-form-button" isLoading={isLoading}>
                        { register ? "Register" : "Add admin" }
                    </Button>
                </Form>
            </Formik>
        </FormWrapper>
    )
}