import { Form, Formik, type FormikHelpers } from "formik"
import { Button } from "../Button"
import { AdminFormFields } from "./AdminFormFields"
import type { IAdminRegister } from "../../types/types"
import { FormWrapper } from "../form/FormWrapper";
import { useRegisterMutation } from "../../api/adminApi";
import { toast } from "react-toastify";

export const AdminAddForm = ({ refetch }: { refetch: () => void }) => {
    const [register, { isLoading }] = useRegisterMutation();

    const handleAddAdmin = async (data: IAdminRegister, { resetForm }: FormikHelpers<IAdminRegister>) => {
        try {
            const result = await register(data).unwrap();
            toast.success(result.message || 'Admin added')
            resetForm();
            refetch();
        } catch (error) {
            const { data } = error as { data?: { message?: string }, status: number };
            toast.error(data?.message || 'Unable to add user')
        }
    }

    return (
        <FormWrapper>
            <Formik
                initialValues={{ name: '', login: '', email: '', password: '', status: 'basic' }}
                onSubmit={handleAddAdmin}
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