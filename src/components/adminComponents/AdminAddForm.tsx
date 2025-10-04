import { Form, Formik, type FormikHelpers } from "formik"
import { Button } from "../Button"
import { AdminFormFields } from "./AdminFormFields"
import type { IAdmin } from "../../types/types"
import { FormWrapper } from "../form/FormWrapper";

type AdminData = Omit<IAdmin, "id"> & { password: string };

export const AdminAddForm = ({ refetch }: { refetch: () => void }) => {
    
    const handleAddAdmin = (data: AdminData, { resetForm }: FormikHelpers<AdminData>) => {
        console.log(data);
        resetForm();
        refetch();
    }

    return (
        <FormWrapper>
            <Formik
                initialValues={{ name: '', login: '', email: '', password: '', status: 'basic' }}
                onSubmit={handleAddAdmin}
            >
                <Form className="flex flex-col gap-4 max-w-120 mx-auto my-4 text-left">
                    <AdminFormFields addAdmin />
                    <Button className="custom-form-button" isLoading={false}>
                        Add
                    </Button>
                </Form>
            </Formik>
        </FormWrapper>
    )
}