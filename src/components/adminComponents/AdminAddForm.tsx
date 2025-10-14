import { Form, Formik, type FormikHelpers } from "formik"
import { Button } from "../Button"
import { AdminFormFields } from "./AdminFormFields"
import { FormWrapper } from "../form/FormWrapper";
import { useAdminRegister } from "../../hooks/adminHooks/useAdminRegister";
import type { IAdminRegister } from "../../types/admin";
import { adminRegisterSchema } from "../validation";

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
                validationSchema={adminRegisterSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={`${register && 'md:my-20'} custom-form my-4`}>
                        <AdminFormFields addAdmin register errorsInfo={{ errors, touched }} />
                        <Button className="custom-form-button" isLoading={isLoading}>
                            {register ? "Register" : "Add admin"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    )
}